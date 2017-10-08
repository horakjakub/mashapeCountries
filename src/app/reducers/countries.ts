import {ICountry} from "../models/country";
import {IReducer} from "../models/reducer"
import {Actions} from '../actions/actions';

// -------------  add item  ------------- //

export const ADD_ITEM: IReducer = {
    action: Actions.Store.AddCountryToCollection,
    reduce: addOneItemToCountriesCollection
};

function addOneItemToCountriesCollection(state: ICountry[], payload: ICountry): ICountry[] {
    state.push(payload);
    return state;
}

