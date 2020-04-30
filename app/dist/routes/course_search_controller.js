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
var route_1 = require("./route");
/**
 * / route
 *
 * @class IndexRoute
 */
// tslint:disable-next-line:class-name
var courseSearchRoute = /** @class */ (function (_super) {
    __extends(courseSearchRoute, _super);
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    function courseSearchRoute() {
        return _super.call(this) || this;
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method creat
     * @static
     */
    courseSearchRoute.create = function (router) {
        var _this = this;
        router.get("/course_search", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var noMatch, noSearch, db, matchedCourses, e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        noMatch = true;
                        noSearch = true;
                        if (!req.query.search) return [3 /*break*/, 8];
                        db = void 0;
                        matchedCourses = void 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 2:
                        db = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        errorLog_1.ErrorLog.log(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, DbClient.find_course(req.query.search, db)];
                    case 5:
                        matchedCourses = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        errorLog_1.ErrorLog.log(e_2);
                        return [3 /*break*/, 7];
                    case 7:
                        // if search doesn't match any courses
                        if (matchedCourses.length === 0) {
                            noMatch = true;
                            noSearch = false;
                            // otherwise we have a match
                        }
                        else {
                            noMatch = false;
                            noSearch = false;
                        }
                        // if we have a match render the results
                        if (!noSearch && !noMatch) {
                            res.render("course_search", {
                                matched_courses: matchedCourses,
                                noMatch: noMatch,
                                noSearch: noSearch,
                            });
                            // if no match, render result
                        }
                        else {
                            noSearch = false;
                            noMatch = true;
                            res.render("course_search", {
                                noMatch: noMatch,
                                noSearch: noSearch,
                            });
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        noSearch = true;
                        res.render("course_search", {
                            noSearch: noSearch,
                        });
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        }); });
    };
    return courseSearchRoute;
}(route_1.BaseRoute));
exports.courseSearchRoute = courseSearchRoute;
//# sourceMappingURL=course_search_controller.js.map