"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("../models/users");
test("isEqual", function () {
    var email = "email";
    var password = "password";
    var user1 = new users_1.User(email, password);
    var user2 = new users_1.User(email, password);
    expect(user1.isEqual(user2)).toBeTruthy();
});
//# sourceMappingURL=users.test.js.map