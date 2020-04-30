"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
        this.state = 0;
    }
    Subject.prototype.attach = function (ob) {
        // console.log("Subject: Attached an observer.");
        this.observers.push(ob);
    };
    Subject.prototype.detach = function (ob) {
        var observerIndex = this.observers.indexOf(ob);
        this.observers.splice(observerIndex, 1);
        // console.log("Subject: Detached an observer.");
    };
    Subject.prototype.notify = function () {
        // console.log("Subject: notifying observers...");
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            // observer.update(this);
        }
    };
    return Subject;
}());
exports.Subject = Subject;
//# sourceMappingURL=Subject.js.map