import {ReplaySubject} from 'rxjs';

export class Action<T> {
    public subject: ReplaySubject<T>;
    name: string;

    constructor(name: string) {
        this.subject = new ReplaySubject<T>();
        this.name = name;
    }

    public emit(value: T = null) {
        this.subject.next(value);
    }
}