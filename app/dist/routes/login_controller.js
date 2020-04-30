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
var users_1 = require("../models/users");
var route_1 = require("./route");
/**
 * / route
 *
 * @class IndexRoute
 */
// tslint:disable-next-line:class-name
var loginRoute = /** @class */ (function (_super) {
    __extends(loginRoute, _super);
    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    function loginRoute() {
        return _super.call(this) || this;
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method creat
     * @static
     */
    loginRoute.create = function (router) {
        var _this = this;
        // this function handles user authentication
        // tslint:disable-next-line:only-arrow-functions
        router.post("/", function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var credentials, db, temp, e_1, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            credentials = new users_1.User(req.body.email, req.body.password);
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
                            return [4 /*yield*/, DbClient.user_auth(credentials, db)];
                        case 5:
                            temp = _a.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            e_2 = _a.sent();
                            errorLog_1.ErrorLog.log(e_2);
                            return [3 /*break*/, 7];
                        case 7:
                            // if user is authenticated, present home screen
                            if (temp) {
                                new loginRoute().pass(req, res, next);
                            }
                            else {
                                new loginRoute().fail(req, res, next);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        });
        router.get("/signout", function (req, res, next) {
            res.render("index");
        });
        router.get("/signup", function (req, res, next) {
            res.render("signup");
        });
        router.post("/signup", function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var newUser, db, success, e_3, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newUser = new users_1.User(req.body.email, req.body.password);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, DbClient.connect()];
                    case 2:
                        db = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        errorLog_1.ErrorLog.log(e_3);
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, DbClient.insert_user(newUser, db)];
                    case 5:
                        success = _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_4 = _a.sent();
                        errorLog_1.ErrorLog.log(e_4);
                        return [3 /*break*/, 7];
                    case 7:
                        if (!success) {
                            errorLog_1.ErrorLog.log("New User Insertion failed.");
                        }
                        if (success) {
                            res.redirect("/");
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    loginRoute.prototype.pass = function (req, res, next) {
        // render the search page
        var noMatch = true;
        var noSearch = true;
        res.render("course_search", {
            noMatch: noMatch,
            noSearch: noSearch,
        });
    };
    loginRoute.prototype.fail = function (req, res, next) {
        // show user they can't break our system
        res.send("not authenticated!");
    };
    return loginRoute;
}(route_1.BaseRoute));
exports.loginRoute = loginRoute;
//# sourceMappingURL=login_controller.js.map