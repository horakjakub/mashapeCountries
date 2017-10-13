import {Action} from "../action";

export interface IReducer {
    action: Action<any>;

    reduce<T>(payload, state: T): T;
}