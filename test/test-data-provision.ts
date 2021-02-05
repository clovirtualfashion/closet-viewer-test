import {TestDataProvision} from "./provision-type";
import {URL} from "url";

export const testDataProvision: TestDataProvision = {
    liburl: new URL("https://viewer-library.s3.ap-northeast-2.amazonaws.com/d.js"),
    srestURLs: [
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/010074390d0848e0bb75184e53efebfa/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/1d55ad72560142a486e6a97deebcbcbe/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/f9a05f55233744d2881c6ee939e14650/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/8ce76da69d4a4a5ea4ae8726e14e48a0/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/9ad0188d578543f4ad1172cb69665e21/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/5bf6c90e9b1b4829969ac1d9c31b27bc/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/d3299a4ef22f4369b0883527a82c5ec8/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/30145466581e444bb033e526195d243f/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/cc18cda70b744e0086bff9d5cd157702/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/d6c1a6b742b8425dbb4056ad3759d95d/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/9beb17fd30474fd48f0fd8fd0dcefd2f/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/1b11deb636d94b838af2f6df9d03de2f/srest.json',
        'https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/srests/8da914c6-fe27-4dbf-9e89-a6e3f42bb72b/048fecca90f14901a59195d07015f80a/srest.json',
    ],
    zrestURLs: [
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000000.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000001.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000002.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000003.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000004.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000005.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000006.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000007.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000008.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000009.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000010.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000011.zrest",
        "https://viewer-test-model.s3.ap-northeast-2.amazonaws.com/00000012.zrest",
    ].map((x) => new URL(x))
}