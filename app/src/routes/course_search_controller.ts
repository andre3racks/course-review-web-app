import { NextFunction, Request, Response, Router } from "express";
import DbClient = require("../DbClient");
import {ErrorLog} from "../logging/errorLog";
import { BaseRoute } from "./route";

/**
 * / route
 *
 * @class IndexRoute
 */
// tslint:disable-next-line:class-name
export class courseSearchRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method creat
     * @static
     */
    public static create(router: Router) {
        router.get("/course_search", async (req: Request, res: Response, next: NextFunction) => {
            let noMatch = true;
            let noSearch = true;
            // if there is a search request
            if (req.query.search) {

                // check DB to see if search matches any courses
                let db;
                let matchedCourses;
                try {
                    db = await DbClient.connect();
                } catch (e) {
                    ErrorLog.log(e);
                }
                try {
                    matchedCourses = await DbClient.find_course(req.query.search, db!);
                } catch (e) {
                    ErrorLog.log(e);
                }
                // if search doesn't match any courses
                if (matchedCourses.length === 0) {
                    noMatch = true;
                    noSearch = false;
                // otherwise we have a match
                } else {
                    noMatch = false;
                    noSearch = false;
                }
                // if we have a match render the results
                if (!noSearch && !noMatch) {

                    res.render("course_search", {
                        matched_courses: matchedCourses,
                        noMatch,
                        noSearch,
                    });

                    // if no match, render result
                } else {

                    noSearch = false;
                    noMatch = true;

                    res.render("course_search", {
                        noMatch,
                        noSearch,
                    });
                }

                // if no search request (loading in to page)
            } else {

                noSearch = true;

                res.render("course_search", {
                    noSearch,
                });
            }
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
