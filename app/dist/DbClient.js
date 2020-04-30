"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var mongo = __importStar(require("mongodb"));
var errorLog_1 = require("./logging/errorLog");
var users_1 = require("./models/users");
var DbClient = /** @class */ (function () {
    function DbClient() {
    }
    DbClient.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var MongoClient, uri, client, db, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MongoClient = require('mongodb').MongoClient;
                        uri = "mongodb+srv://seng350Project:seng350Project12345@cluster0-hyxx9.mongodb.net/test?retryWrites=true&w=majority";
                        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client.connect()];
                    case 2:
                        db = _a.sent();
                        this.db = db.db("myapp");
                        return [2 /*return*/, this.db];
                    case 3:
                        error_1 = _a.sent();
                        errorLog_1.ErrorLog.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DbClient.prototype.query = function (collection, db) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, db.collection(collection).find().toArray()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        e_1 = _a.sent();
                        errorLog_1.ErrorLog.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DbClient.prototype.user_auth = function (user, db) {
        return __awaiter(this, void 0, void 0, function () {
            var users, _i, _a, user_1, temp, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.query("users", db)];
                    case 1:
                        users = _b.sent();
                        // console.log(users);
                        for (_i = 0, _a = users; _i < _a.length; _i++) {
                            user_1 = _a[_i];
                            temp = new users_1.User(user_1.email, user_1.password);
                            if (temp.isEqual(user_1)) {
                                return [2 /*return*/, true];
                            }
                        }
                        return [2 /*return*/, false];
                    case 2:
                        e_2 = _b.sent();
                        errorLog_1.ErrorLog.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DbClient.prototype.insert_user = function (user, db) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    db.collection("users").insertOne(user);
                    return [2 /*return*/, true];
                }
                catch (e) {
                    errorLog_1.ErrorLog.log(e);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    DbClient.prototype.find_by_id = function (id, collection, db) {
        return __awaiter(this, void 0, void 0, function () {
            var oId, course, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oId = new mongo.ObjectID(id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, db.collection(collection).findOne({ _id: oId })];
                    case 2:
                        course = _a.sent();
                        return [2 /*return*/, course];
                    case 3:
                        e_3 = _a.sent();
                        errorLog_1.ErrorLog.log(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DbClient.prototype.find_course = function (title, db) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, db.collection("courses").find({ title: title }).toArray()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        e_4 = _a.sent();
                        errorLog_1.ErrorLog.log(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DbClient.prototype.find_reviews = function (title, db) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, db.collection("reviews").find({ courseTitle: title }).toArray()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        e_5 = _a.sent();
                        errorLog_1.ErrorLog.log(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DbClient.prototype.insert_review = function (review, db) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    db.collection("reviews").insertOne(review);
                    return [2 /*return*/, true];
                }
                catch (e) {
                    errorLog_1.ErrorLog.log(e);
                    return [2 /*return*/, false];
                }
                return [2 /*return*/];
            });
        });
    };
    return DbClient;
}());
module.exports = new DbClient();
//# sourceMappingURL=DbClient.js.map