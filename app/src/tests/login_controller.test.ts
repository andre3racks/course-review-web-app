import nock from "nock";
import {User} from "../models/users";

test("homepage", () => {

    beforeEach(() => {
        nock("http://localhost:3000")
            .get("/")
            .reply(200);
    });
});

test("signup", () => {

    beforeEach(() => {
        nock("http://localhost:3000")
            .get("/signup")
            .reply(200);
    });
});

test("homepage", () => {

    beforeEach(() => {
        nock("http://localhost:3000")
            .post("/")
            .reply(200);
    });
});

test("homepage", () => {

    beforeEach(() => {
        nock("http://localhost:3000")
            .post("/signup")
            .reply(200);
    });
});
