
import { NextFunction, Request, Response, Router } from "express";

import DbClient = require("../DbClient");
import { ErrorLog} from "../logging/errorLog";
import {User} from "../models/users";
import { BaseRoute } from "./route";

/**
 * / route
 *
 * @class IndexRoute
 */
// tslint:disable-next-line:class-name
export class loginRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method creat
     * @static
     */
    public static create(router: Router) {
        // this function handles user authentication
        // tslint:disable-next-line:only-arrow-functions
        router.post("/", async function(req, res, next) {
            // receive credentials from form
            const credentials = new User(req.body.email, req.body.password);
            let db;
            let temp;
            // connect to db
            try {
                db = await DbClient.connect();
            } catch (e) {
                ErrorLog.log(e);
            }
            // user auth function
            try {
                temp = await DbClient.user_auth(credentials, db!);
            } catch (e) {
                ErrorLog.log(e);
            }
            // if user is authenticated, present home screen
            if (temp) {
                new loginRoute().pass(req, res, next);
            } else {
                new loginRoute().fail(req, res, next);
            }

        });

        router.get("/signout", (req: Request, res: Response, next: NextFunction) => {
            res.render("index");
        });

        router.get("/signup", (req: Request, res: Response, next: NextFunction) => {
            res.render("signup");
        });

        router.post("/signup", async (req: Request, res: Response, next: NextFunction) => {
            // this function inserts new users into the db
            const newUser = new User(req.body.email, req.body.password);
            let db;
            let success;
            // connect to db
            try {
                db = await DbClient.connect();
            } catch (e) {
                ErrorLog.log(e);
            }
            // insert new user
            try {
                success = await DbClient.insert_user(newUser, db!);
            } catch (e) {
                ErrorLog.log(e);
            }
            if (!success)    {
                ErrorLog.log("New User Insertion failed.");
            }
            if (success)    {
                res.redirect("/");
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

    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public pass(req: Request, res: Response, next: NextFunction) {
        // render the search page
        const noMatch = true;
        const noSearch = true;

        res.render("course_search", {
            noMatch,
            noSearch,
        });
    }

    public fail(req: Request, res: Response, next: NextFunction) {
        // show user they can't break our system
        res.send("not authenticated!");

    }
}
