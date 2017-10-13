import {IReducer} from "../models/stores/reducer"
import {Actions} from '../actions/actions';
import {ICurrency} from "../models/data/currency";

export const ADD_CURRENCY: IReducer = {
    action: Actions.Store.AddCurrency,
    reduce: addOneItemToCurrencyCollection
};

function addOneItemToCurrencyCollection(state: ICurrency[], payload: ICurrency): ICurrency[] {
    state.push(payload);
    return state;
}

