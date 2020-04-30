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
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    // construct User from email and password
    function Course(title, rating, faculty) {
        var _this = _super.call(this) || this;
        // this.department = department;
        // this.course_number = course_number;
        _this.title = title;
        _this.rating = rating;
        _this.faculty = faculty;
        return _this;
    }
    Course.prototype.isEqual = function (course) {
        return course.title === this.title;
    };
    return Course;
}(Subject_1.Subject));
exports.Course = Course;
//# sourceMappingURL=course.js.map