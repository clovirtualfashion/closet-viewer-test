import {
    generateAndSaveSrestAnswers,
    generateAndSaveZrestAnswers,
    runWithBrowser,
    streamScreenshots_browser,
    testSrestLibrary,
    testZrestLibrary
} from "../src";
import * as E from "fp-ts/Either";
import {isLeft} from "fp-ts/Either";
import {basename, resolve} from "path";
import * as fs from "fs";
import fse from "fs-extra";
import {TestDataProvision} from "./provision-type";
import {testDataProvision} from "./test-data-provision";
import {spawnSync} from "child_process";
import {errorTemplate} from "./test-template";
import {toTaskEither} from "fp-ts-rxjs/lib/ObservableEither";

const testData: TestDataProvision = testDataProvision;


const testAnswersDir = resolve(__dirname, "test-answers");
test("save", () => {
    const task = generateAndSaveSrestAnswers(testData.srestURLs, testAnswersDir, testData.liburl);
    return expect(task().then(E.isRight)).resolves.toBeTruthy();
}, 1000 * 60 * 10)

const testDebugDir = resolve(__dirname, "test-debug-images");

test("compare", () => {
    expect(fs.existsSync(testAnswersDir)).toBeTruthy();
    const task = testSrestLibrary(testData.liburl, testData.srestURLs, testAnswersDir, testDebugDir);
    return task().then(either => {
        expect(E.isRight(either)).toBeTruthy();
        if (E.isRight(either)) {
            expect(either.right).toBe(0);
        }
    })
}, 1000 * 60 * 10)

const impairDir = resolve(__dirname, "impairs");

test("impair", () => {
    const wrongDir = resolve(__dirname, "test-wrongs");
    const wrongDebugDir = resolve(__dirname, "wrong-debug-images");

    if (fs.existsSync(wrongDir)) {
        fs.rmdirSync(wrongDir, {recursive: true});
    }
    fse.copySync(testAnswersDir, wrongDir, {recursive: true});
    fs.readdirSync(impairDir).forEach(impairFilename => {
        fs.copyFileSync(resolve(impairDir, impairFilename), resolve(wrongDir, impairFilename));
    });
    const task = testSrestLibrary(testData.liburl, testData.srestURLs, wrongDir, wrongDebugDir);
    return task().then(either => {
        expect(E.isRight(either)).toBeTruthy();
        if (E.isRight(either)) {
            expect(either.right).toBe(3);
        }
    })
}, 1000 * 60 * 10)
test("command", () => {
    const aaa = spawnSync("env",);
    console.log((aaa.stdout as any).toString('utf8'));
    expect(true).toBeTruthy();
})

const zrestAnswersDir = resolve(__dirname, "zrest-answers");
test("zrest gen answer", () => {
    const task = generateAndSaveZrestAnswers(testData.liburl, testData.zrestURLs, zrestAnswersDir);
    return expect(task().then(E.isRight)).resolves.toBeTruthy();
}, 1000 * 60 * 10)

const zrestDebugDir = resolve(__dirname, "zrest-debug");
test("zrest-libtest", () => {
    expect(fs.existsSync(zrestAnswersDir)).toBeTruthy();
    const task = testZrestLibrary(testData.liburl, testData.zrestURLs, zrestAnswersDir, zrestDebugDir);
    return task().then(either => {
        if (E.isRight(either)) {
            expect(either.right).toBe(0);
        } else {
            expect(false).toBeTruthy();
        }
    })
}, 1000 * 60 * 10);

const zrestWrongDir = resolve(__dirname, "zrest-wrongs");
test("zrest-impair", () => {
    if (fs.existsSync(zrestWrongDir)) {
        fs.rmdirSync(zrestWrongDir, {recursive: true});
    }
    fse.copySync(zrestAnswersDir, zrestWrongDir, {recursive: true});
    fs.readdirSync(impairDir).forEach(impairFilename => {
        fs.copyFileSync(resolve(impairDir, impairFilename), resolve(zrestWrongDir, impairFilename));
    });
    const task = testZrestLibrary(testData.liburl, testData.zrestURLs, zrestWrongDir, zrestDebugDir);
    return task().then(either => {
        expect(E.isRight(either)).toBeTruthy();
        if (E.isRight(either)) {
            expect(either.right).toBe(3);
        }
    })
}, 1000 * 60 * 10);

test("stop when error test", () => {
    const reader = streamScreenshots_browser(errorTemplate, "oeuidhtndiueuidhthdiueuidh");
    const aaa = runWithBrowser(browser => {
        return toTaskEither(reader(browser));
    });
    return aaa().then(either => {
        console.log(either);
        expect(isLeft(either)).toBeTruthy();
    })
}, 1000 * 60)

test("alternative", () => {
    const dir = resolve(__dirname, "test-alts");
    const debugdir = resolve(__dirname, "alt-debug-images");

    if (fs.existsSync(dir)) {
        fs.rmdirSync(dir, {recursive: true});
    }
    fse.copySync(testAnswersDir, dir, {recursive: true});
    fs.readdirSync(impairDir).filter(x => x.endsWith(".png")).forEach(impairFilename => {
        const answer = resolve(dir, impairFilename);
        const altdir = resolve(dir, basename(impairFilename, ".png"));
        const alt = resolve(altdir, impairFilename);
        const impair = resolve(impairDir, impairFilename);
        fs.mkdirSync(altdir);
        fs.copyFileSync(answer, alt)
        fs.copyFileSync(impair, answer);
    });
    const task = testSrestLibrary(testData.liburl, testData.srestURLs, dir, debugdir);
    return task().then(either => {
        expect(E.isRight(either)).toBeTruthy();
        if (E.isRight(either)) {
            expect(either.right).toBe(0);
        }
    })
}, 1000 * 60 * 10)