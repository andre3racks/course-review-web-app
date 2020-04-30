"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nock_1 = __importDefault(require("nock"));
test("homepage", function () {
    beforeEach(function () {
        nock_1.default("http://localhost:3000")
            .get("/")
            .reply(200);
    });
});
test("signup", function () {
    beforeEach(function () {
        nock_1.default("http://localhost:3000")
            .get("/signup")
            .reply(200);
    });
});
test("homepage", function () {
    beforeEach(function () {
        nock_1.default("http://localhost:3000")
            .post("/")
            .reply(200);
    });
});
test("homepage", function () {
    beforeEach(function () {
        nock_1.default("http://localhost:3000")
            .post("/signup")
            .reply(200);
    });
});
//# sourceMappingURL=login_controller.test.js.map