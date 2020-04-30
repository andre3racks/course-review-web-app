import DbClient = require("../DbClient");
import {User} from "../models/users";

test("connect", async () => {

    const db = await DbClient.connect();

    expect(db).toBeTruthy();

});

test("query users", async () => {

    const db = await DbClient.connect();
    const users = await DbClient.query("users", db!);

    expect(users).toBeTruthy();

});

// this will fail if this user is not in your db!!
test("user auth", async () => {

    const db = await DbClient.connect();
    const user = new User("test@gmail.com", "admin");
    const auth = await DbClient.user_auth(user, db!);

    expect(auth).toBeTruthy();

});

test("find_reviews", async () => {

    const db = await DbClient.connect();
    const reviews = DbClient.find_reviews("SENG 350", db!);

    expect(reviews).toBeTruthy();

});

test("find_course", async () => {

    const db = await DbClient.connect();
    const course = DbClient.find_course("SENG 350", db!);

    expect(course).toBeTruthy();
});
