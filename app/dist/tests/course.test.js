"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var course_1 = require("../models/course");
test("isEqual", function () {
    // let number = 101;
    // let department = "CSC";
    var title = "CSC 101";
    var rating = 3.0;
    var faculty = "Computer Science";
    var course1 = new course_1.Course(title, rating, faculty);
    var course2 = new course_1.Course(title, rating, faculty);
    expect(course1.isEqual(course2)).toBeTruthy();
});
//# sourceMappingURL=course.test.js.map