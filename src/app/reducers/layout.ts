import {ILayout} from "../models/layout"
import {IReducer} from "../models/reducer";
import {Actions} from '../actions/actions';

export const initialState: ILayout = {
    actualViewURL: '',
    loaderVisible: false,
    countryDetailsVisible: false
};

// -------------  change site  ------------- //

export const CHANGE_ACTUAL_SITE: IReducer = {
    action: Actions.Store.ChangeSiteTo,
    reduce: changeCurrentSiteForNew
};

function changeCurrentSiteForNew(state: ILayout, payload: string): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.actualViewURL = payload;
    return newState;
}

/* ----------- / COUNTRY_DETAILS_VISIBLE / --------------*/

export const COUNTRY_DETAILS_VISIBLE: IReducer = {
    action: Actions.Store.CountryDetailsVisible,
    reduce: countryDetailsVisible
};

function countryDetailsVisible(state: ILayout, payload: boolean): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.countryDetailsVisible = payload;
    return newState;
}

/* ----------- / COUNTRIES_LIST_VISIBLE / --------------*/

export const LOADER_VISIBLE: IReducer = {
    action: Actions.Store.LoaderVisible,
    reduce: loaderVisible
};

function loaderVisible(state: ILayout, payload: boolean): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.loaderVisible = payload;
    return newState;
}