import {User} from "../models/users";

test("isEqual", () => {
   const email = "email";
   const password = "password";

   const user1 = new User(email, password);
   const user2 = new User(email, password);

   expect(user1.isEqual(user2)).toBeTruthy();

});
