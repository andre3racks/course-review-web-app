import {ISubject} from "../interfaces/ISubject";
import {Observer} from "../Observer/Observer";

export class Subject implements ISubject {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    public state: number;
    private readonly observers: Observer[];

    constructor() {
        this.observers = [];
        this.state = 0;
    }

    public attach(ob: Observer): void {
        // console.log("Subject: Attached an observer.");
        this.observers.push(ob);
    }

    public detach(ob: Observer): void {
        const observerIndex = this.observers.indexOf(ob);
        this.observers.splice(observerIndex, 1);
        // console.log("Subject: Detached an observer.");
    }

    public notify(): void {
        // console.log("Subject: notifying observers...");
        for (const observer of this.observers) {
           // observer.update(this);
        }
    }

}
