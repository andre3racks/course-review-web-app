import {Db, MongoClient} from "mongodb";
import * as mongo from "mongodb";
import {ErrorLog} from "./logging/errorLog";
import {Review} from "./models/reviews";
import {User} from "./models/users";

class DbClient {
    public db!: Db;

    public async connect() {
        // connection function modified from lab3 slides to include some aspects of mongo cloud connection function
        // tslint:disable-next-line:no-shadowed-variable
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://seng350Project:seng350Project12345@cluster0-hyxx9.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
        try {
            const db = await client.connect();
            this.db = db.db("myapp");
            return this.db;

        } catch (error) {
             ErrorLog.log(error);
        }
    }

    public async query(collection: string, db: Db) { // method to return all results in collection of DB
        try {
            const result = await db!.collection(collection).find().toArray();
            return result;
        } catch (e) {
            ErrorLog.log(e);
        }
    }

    public async user_auth(user: User, db: Db) {
        // check if given credentials are valid
        try {
            const users = await this.query("users", db);
            // console.log(users);
            // tslint:disable-next-line:no-shadowed-variable
            for (const user of users!)   {
                const temp = new User(user.email, user.password);
                if (temp.isEqual(user)) {
                    return true;
                }
            }
            return false;
        } catch (e)   {
           ErrorLog.log(e);
        }

    }

    public async insert_user(user: User, db: Db)  {
        try {
            db!.collection("users").insertOne(user);
            return true;
        } catch (e)  {
            ErrorLog.log(e);
            return false;
        }
    }
    public async find_by_id(id: string, collection: string, db: Db) {
        const oId = new mongo.ObjectID(id);
        try {
            const course = await db.collection(collection).findOne({_id: oId});
            return course;
        } catch (e) {
            ErrorLog.log(e);
        }
    }

    public async find_course(title: string, db: Db) {
        try {
            const result = await db.collection("courses").find({title}).toArray();
            return result;
        } catch (e) {
            ErrorLog.log(e);
        }
    }

    public async find_reviews(title: string, db: Db) {
        try {
            const result = await db.collection("reviews").find({courseTitle: title}).toArray();
            return result;
        } catch (e) {
            ErrorLog.log(e);
        }
    }
    public async insert_review(review: Review, db: Db) {

        try {
            db.collection("reviews").insertOne(review);
            return true;
        } catch (e)  {
            ErrorLog.log(e);
            return false;
        }
    }
}

export = new DbClient();
