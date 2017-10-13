import {ReplaySubject} from 'rxjs';
import {IReducer} from "./reducer";

export class Store<T> extends ReplaySubject<T> {
    private reducers = {};
    private state: T;

    constructor(initialState) {
        super();
        this.subscribe((state: T) => {
            this.state = state
        });
        this.next(initialState);
    }

    registerReducer(reducer: IReducer): void {
        this.reducers[reducer.action.name] = reducer;
        reducer.action.subject.subscribe((payload) => {
            this.next(reducer.reduce(this.state, payload))
        })
    }
}
