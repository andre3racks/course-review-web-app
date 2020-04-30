import {IModel} from "../interfaces/IModel";
import {Subject} from "../Subject/Subject";

export class Review extends Subject implements IModel {
    public rating: number;
    public body: string;
    public professor: string;
    public reviewTitle: string;
    public courseTitle: string;
    public author: string;

    constructor(courseTitle: string, reviewTitle: string, body: string,
                rating: number, author: string, professor: string) {
        super();
        this.courseTitle = courseTitle;
        this.reviewTitle = reviewTitle;
        this.professor = professor;
        this.author = author;
        this.body = body;
        this.rating = rating;
    }
    public isEqual(review: Review) {
        return review.reviewTitle === this.reviewTitle && review.rating === this.rating
            && review.courseTitle === this.courseTitle && review.author === this.author && review.body ===
            this.body && review.professor === this.professor;
    }

}
