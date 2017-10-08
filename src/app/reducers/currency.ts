import {IReducer} from "../models/reducer"
import {Actions} from '../actions/actions';
import {ICurrency} from "../models/currency";

export const ADD_CURRENCY: IReducer = {
    action: Actions.Store.AddCurrency,
    reduce: addOneItemToCurrencyCollection
};

function addOneItemToCurrencyCollection(state: ICurrency[], payload: ICurrency): ICurrency[] {
    state.push(payload);
    return state;
}

