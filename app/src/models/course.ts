import {IModel} from "../interfaces/IModel";
import {Subject} from "../Subject/Subject";

export class Course extends Subject implements IModel {

    // public department: string;
    // public course_number: number;
    public rating: number;
    public faculty: string;
    public title: string;

    // construct User from email and password
    constructor(title: string, rating: number, faculty: string )   {
        super();
        // this.department = department;
        // this.course_number = course_number;
        this.title = title;
        this.rating = rating;
        this.faculty = faculty;
    }

    public isEqual(course: Course) {
        return course.title === this.title;
    }

}
