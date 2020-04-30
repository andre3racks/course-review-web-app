import {Subject} from "../Subject/Subject";

export interface IObserver {
    // Receive update from subject.
    update(subject: Subject): void;
}
