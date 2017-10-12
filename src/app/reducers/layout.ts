import {ILayout} from "../models/layout"
import {IReducer} from "../models/reducer";
import {Actions} from '../actions/actions';
import {IAlert} from "../models/alerts";

export const initialState: ILayout = {
    loaderVisible: false,
    alert: {
        visible: false,
        message: '',
        header: ''
    }
};

/* ----------- / SHOW_ALERT / --------------*/
export const SHOW_ALERT: IReducer = {
    action: Actions.Store.ShowAlert,
    reduce: showAlert
};

function showAlert(state: ILayout, payload: IAlert): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.alert.visible = payload.visible;
    newState.alert.message = payload.message;
    newState.alert.header = payload.header;
    return newState;
}

/* ----------- / ALERT_VISIBLE / --------------*/
export const ALERT_VISIBLE: IReducer = {
    action: Actions.Store.AlertVisible,
    reduce: AlertVisible
};

function AlertVisible(state: ILayout, payload: boolean): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.alert.visible = payload;
    return newState;
}

/* ----------- / LOADER_VISIBLE / --------------*/

export const LOADER_VISIBLE: IReducer = {
    action: Actions.Store.LoaderVisible,
    reduce: loaderVisible
};

function loaderVisible(state: ILayout, payload: boolean): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.loaderVisible = payload;
    return newState;
}