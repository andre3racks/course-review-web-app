import {IModel} from "../interfaces/IModel";
import {Subject} from "../Subject/Subject";

export class User extends Subject implements IModel {

    public email: string;
    public password: string;

    // construct User from email and password
    constructor(email: string, password: string)   {
        super();
        this.email = email;
        this.password = password;
    }

    public isEqual(user: User) {
        return user.email === this.email && user.password === this.password;
    }

}
