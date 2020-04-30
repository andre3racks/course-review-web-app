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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var DbClient = require("../DbClient");
var errorLog_1 = require("../logging/errorLog");
var reviews_1 = require("../models/reviews");
var route_1 = require("./route");
/**
 * / route
 *
 * @class IndexRoute
 */
var ReviewRoute = /** @class */ (function (_super) {
    __extends(ReviewRoute, _super);
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    function ReviewRoute() {
        return _super.call(this) || this;
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method creat
     * @static
     */
    ReviewRoute.create = function (router) {
        // log
        // console.log("[ReviewRoute::create] Creating review controller.");
        var _this = this;
        // add home page route
        router.get("/reviews/add/:id", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var db, course, err_1, e_1, courseTitle, courseId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 1:
                        db = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        errorLog_1.ErrorLog.log(err_1);
                        return [3 /*break*/, 3];
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, DbClient.find_by_id(req.params.id, "courses", db)];
                    case 4:
                        course = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        errorLog_1.ErrorLog.log(e_1);
                        return [3 /*break*/, 6];
                    case 6:
                        courseTitle = course.title;
                        courseId = req.params.id;
                        // render page with course info
                        res.render("add_review", {
                            courseTitle: courseTitle,
                            // tslint:disable-next-line:object-literal-sort-keys
                            courseId: courseId,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        router.post("/reviews/add/:id", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var redirect_url, db, course, success, e_2, e_3, newReview, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        redirect_url = "/reviews/" + req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 2:
                        db = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        errorLog_1.ErrorLog.log(e_2);
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, DbClient.find_by_id(req.params.id, "courses", db)];
                    case 5:
                        course = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_3 = _a.sent();
                        errorLog_1.ErrorLog.log(e_3);
                        return [3 /*break*/, 7];
                    case 7:
                        newReview = new reviews_1.Review(course.title, req.body.title, req.body.review, req.body.rating, "john doe", req.body.professor);
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, DbClient.insert_review(newReview, db)];
                    case 9:
                        success = _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_4 = _a.sent();
                        errorLog_1.ErrorLog.log(e_4);
                        return [3 /*break*/, 11];
                    case 11:
                        if (success) {
                            // console.log("added review");
                        }
                        // redirect user to course information page
                        res.redirect(redirect_url);
                        return [2 /*return*/];
                }
            });
        }); });
        router.get("/reviews/:id", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var db, course, reviews, e_5, e_6, courseTitle, courseId, faculty, e_7, sum, numReviews, _i, reviews_2, review, courseRating;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 1:
                        db = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        errorLog_1.ErrorLog.log(e_5);
                        return [3 /*break*/, 3];
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, DbClient.find_by_id(req.params.id, "courses", db)];
                    case 4:
                        course = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        errorLog_1.ErrorLog.log(e_6);
                        return [3 /*break*/, 6];
                    case 6:
                        courseTitle = course.title;
                        courseId = req.params.id;
                        faculty = course.faculty;
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 9, , 10]);
                        return [4 /*yield*/, DbClient.find_reviews(courseTitle, db)];
                    case 8:
                        reviews = _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        e_7 = _a.sent();
                        errorLog_1.ErrorLog.log(e_7);
                        return [3 /*break*/, 10];
                    case 10:
                        sum = 0;
                        numReviews = 0;
                        // iterate over reviews to find average rating
                        for (_i = 0, reviews_2 = reviews; _i < reviews_2.length; _i++) {
                            review = reviews_2[_i];
                            sum += parseInt(review.rating, 10);
                            numReviews++;
                        }
                        if (numReviews == 0) {
                            sum = 0;
                        }
                        else {
                            sum = (sum / numReviews);
                        }
                        courseRating = sum.toFixed(1);
                        res.render("reviews", {
                            // send course ID
                            courseId: courseId,
                            // send course rating
                            courseRating: courseRating,
                            // send course title
                            courseTitle: courseTitle,
                            // send course faculty
                            faculty: faculty,
                            // Then send a object called reviews with all the review for that course
                            reviews: reviews,
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return ReviewRoute;
}(route_1.BaseRoute));
exports.ReviewRoute = ReviewRoute;
//# sourceMappingURL=ReviewController.js.map