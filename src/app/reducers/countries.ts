import {ICountry} from "../models/data/country";
import {IReducer} from "../models/stores/reducer"
import {Actions} from '../actions/actions';

export const ADD_COUNTRY: IReducer = {
    action: Actions.Store.AddCountry,
    reduce: addOneItemToCountriesCollection
};

function addOneItemToCountriesCollection(state: ICountry[], payload: ICountry): ICountry[] {
    state.push(payload);
    return state;
}

