"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("../Subject/Subject");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    // construct User from email and password
    function User(email, password) {
        var _this = _super.call(this) || this;
        _this.email = email;
        _this.password = password;
        return _this;
    }
    User.prototype.isEqual = function (user) {
        return user.email === this.email && user.password === this.password;
    };
    return User;
}(Subject_1.Subject));
exports.User = User;
//# sourceMappingURL=users.js.map