import {Course} from "../models/course";

test("isEqual", () => {
    // let number = 101;
    // let department = "CSC";
    const title = "CSC 101";
    const rating = 3.0;
    const faculty = "Computer Science";

    const course1 = new Course(title, rating, faculty);
    const course2 = new Course(title, rating, faculty);

    expect(course1.isEqual(course2)).toBeTruthy();

});
