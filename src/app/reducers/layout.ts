import {ILayout} from "../models/layout"
import {IReducer} from "../models/reducer";
import {Actions} from '../actions/actions';

// -------------  change site  ------------- //

export const CHANGE_ACTUAL_SITE: IReducer = {
    action: Actions.Store.ChangeSiteTo,
    reduce: changeCurrentSiteForNew
};

function changeCurrentSiteForNew(state: ILayout, payload: string): ILayout {
    const newState: ILayout = Object.assign({}, state);
    newState.actualView = payload;
    return newState;
}

