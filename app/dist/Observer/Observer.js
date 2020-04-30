"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.update = function (subject) {
        if (subject.state < 3) {
            // console.log("ObserverA: Reacted to the event.");
        }
        if (subject.state === 0 || subject.state >= 2) {
            // console.log("ConcreteObserverB: Reacted to the event.");
        }
    };
    return Observer;
}());
exports.Observer = Observer;
//# sourceMappingURL=Observer.js.map