
import { NextFunction, Request, Response, Router } from "express";
import DbClient = require("../DbClient");
import { ErrorLog } from "../logging/errorLog";
import { Review } from "../models/reviews";
import { BaseRoute } from "./route";

/**
 * / route
 *
 * @class IndexRoute
 */
export class ReviewRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method creat
     * @static
     */
    public static create(router: Router) {
        // log
        // console.log("[ReviewRoute::create] Creating review controller.");

        // add home page route

        router.get("/reviews/add/:id", async (req: Request, res: Response, next: NextFunction) => {
            let db;
            let course;
            // connect to db
            try {
                db = await DbClient.connect();
            } catch ( err )  {
                ErrorLog.log(err);
            }
            // find course by id
            try {
                course = await DbClient.find_by_id(req.params.id, "courses", db!);
            } catch (e) {
                ErrorLog.log(e);
            }
            const courseTitle = course.title;
            const courseId = req.params.id;
            // render page with course info
            res.render("add_review", {
                courseTitle,
                // tslint:disable-next-line:object-literal-sort-keys
                courseId,
            });
        });

        router.post("/reviews/add/:id", async (req: Request, res: Response, next: NextFunction) => {
            // to add a review into db
            // tslint:disable-next-line:variable-name
            const redirect_url = "/reviews/" + req.params.id;
            let db;
            let course;
            let success;
            // connect to db
            try {
                db = await DbClient.connect();
            } catch (e) {
                ErrorLog.log(e);
            }
            // find course information
            try {
                course = await DbClient.find_by_id(req.params.id, "courses", db!);
            } catch (e) {
                ErrorLog.log(e);
            }
            const newReview = new Review(course.title, req.body.title, req.body.review, req.body.rating,
                "john doe", req.body.professor);
            // insert new review
            try {
                success = await DbClient.insert_review(newReview, db!);
            } catch (e) {
                ErrorLog.log(e);
            }
            if (success) {
                // console.log("added review");
            }
            // redirect user to course information page
            res.redirect(redirect_url);
        });

        router.get("/reviews/:id", async (req: Request, res: Response, next: NextFunction) => {
            // this function renders the reviews and information of a course view
            let db;
            let course;
            let reviews;
            // connect to db
            try {
                db = await DbClient.connect();
            } catch (e) {
                ErrorLog.log(e);
            }
            // find course information
            try {
                course = await DbClient.find_by_id(req.params.id, "courses", db!);
            } catch (e) {
                ErrorLog.log(e);
            }
            const courseTitle = course.title;
            const courseId = req.params.id;
            const faculty = course.faculty;
            // find reviews relevant to the course
            try {
                reviews = await DbClient.find_reviews(courseTitle, db!);
            } catch (e) {
                ErrorLog.log(e);
            }

            let sum = 0;
            let numReviews = 0;
            // iterate over reviews to find average rating
            for (const review of reviews)    {
                sum += parseInt(review.rating, 10);
                numReviews++;
            }

            if (numReviews === 0) {
                sum = 0;
            } else {
                sum = (sum / numReviews);
            }

            const courseRating = sum.toFixed(1);
            res.render("reviews", {
                // send course ID
                courseId,
                // send course rating
                courseRating,

                // send course title
                courseTitle,

                // send course faculty

                faculty,

                // Then send a object called reviews with all the review for that course

                reviews,
                // The reviews object should have an author, rating, title, and body
            });
        });
    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }

}
