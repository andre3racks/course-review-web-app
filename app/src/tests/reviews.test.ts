import {Review} from "../models/reviews";

test("isEqual", () => {
    // let number = 101;
    // let department = "CSC";
    const courseTitle = "CSC 101";
    const rating = 3;
    const reviewTitle = "Yeet";
    const body = "Nice";
    const author = "Dinkleberg";
    const professor = "Dr. Man";

    const review1 = new Review(courseTitle, reviewTitle, body, rating, author, professor);
    const review2 = new Review(courseTitle, reviewTitle, body, rating, author, professor);

    expect(review1.isEqual(review2)).toBeTruthy();

});
