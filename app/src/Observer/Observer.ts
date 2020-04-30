import {IObserver} from "../interfaces/IObserver";
import {Subject} from "../Subject/Subject";

export class Observer implements IObserver {
    public update(subject: Subject): void {
        if (subject.state < 3) {
           // console.log("ObserverA: Reacted to the event.");
        }
        if (subject.state === 0 || subject.state >= 2) {
            // console.log("ConcreteObserverB: Reacted to the event.");
        }
    }

}
