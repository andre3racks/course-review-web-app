"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reviews_1 = require("../models/reviews");
test("isEqual", function () {
    // let number = 101;
    // let department = "CSC";
    var courseTitle = "CSC 101";
    var rating = 3;
    var reviewTitle = "Yeet";
    var body = "Nice";
    var author = "Dinkleberg";
    var professor = 'Dr. Man';
    var review1 = new reviews_1.Review(courseTitle, reviewTitle, body, rating, author, professor);
    var review2 = new reviews_1.Review(courseTitle, reviewTitle, body, rating, author, professor);
    expect(review1.isEqual(review2)).toBeTruthy();
});
//# sourceMappingURL=reviews.test.js.map