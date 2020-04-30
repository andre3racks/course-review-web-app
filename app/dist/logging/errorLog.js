"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var ErrorLog = /** @class */ (function () {
    function ErrorLog() {
    }
    // tslint:disable-next-line:no-empty
    ErrorLog.create = function () {
    };
    ErrorLog.log = function (error) {
        var now = new Date();
        fs_1.default.appendFile("errorlog.txt", now.toString() + error, function (err) {
            if (err) {
                // tslint:disable-next-line:no-console
                console.log("error writing to errorlog :/");
            }
        });
    };
    return ErrorLog;
}());
exports.ErrorLog = ErrorLog;
//# sourceMappingURL=errorLog.js.map