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
var Review = /** @class */ (function (_super) {
    __extends(Review, _super);
    function Review(courseTitle, reviewTitle, body, rating, author, professor) {
        var _this = _super.call(this) || this;
        _this.courseTitle = courseTitle;
        _this.reviewTitle = reviewTitle;
        _this.professor = professor;
        _this.author = author;
        _this.body = body;
        _this.rating = rating;
        return _this;
    }
    Review.prototype.isEqual = function (review) {
        return review.reviewTitle === this.reviewTitle && review.rating === this.rating
            && review.courseTitle === this.courseTitle && review.author === this.author && review.body ===
            this.body && review.professor === this.professor;
    };
    return Review;
}(Subject_1.Subject));
exports.Review = Review;
//# sourceMappingURL=reviews.js.map