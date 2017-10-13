import {IRoute, IRoutes} from "../models/stores/routes";
import {IReducer} from "../models/stores/reducer";
import {Actions} from '../actions/actions';

export const initialState: IRoutes = {
    loading: false,
    currentRoute: {path: "", data: {}},
    registeredRoutes: [{path: "", data: {}}]
};

// -------------  CHANGE_CURRENT_ROUTE ------------- //

export const CHANGE_CURRENT_ROUTE: IReducer = {
    action: Actions.Store.ChangeCurrentRoute,
    reduce: changeCurrentRoute
};

function changeCurrentRoute(state: IRoutes, payload: string): IRoutes {
    const newState: IRoutes = Object.assign({}, state);
    newState.currentRoute = newState.registeredRoutes.find((route: IRoute) => route.path === payload) || {
        path: "",
        data: {}
    };
    return newState;
}

// -------------  REGISTER_NEW_ROUTE ------------- //

export const REGISTER_NEW_ROUTE: IReducer = {
    action: Actions.Store.RegisterNewRoute,
    reduce: registerNewRoute
};

function registerNewRoute(state: IRoutes, payload: IRoute): IRoutes {
    const newState: IRoutes = Object.assign({}, state);
    newState.registeredRoutes.push(payload);
    return newState;
}

// ------------- ROUTER REGISTERING ------------- //

export const ROUTES_REGISTERING: IReducer = {
    action: Actions.Store.RoutesRegistering,
    reduce: routesRegistering
};


function routesRegistering(state: IRoutes, payload: boolean): IRoutes {
    const newState: IRoutes = Object.assign({}, state);
    newState.loading = payload;
    return newState;
}
