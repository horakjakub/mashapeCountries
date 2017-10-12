import {Injectable} from '@angular/core';
import {Store} from "../models/store";

import {ICountry} from "../models/country";
import {ILayout} from "../models/layout";
import {IRoutes} from "../models/routes";
import {ICurrency} from "../models/currency";

import * as CountriesReducers from "../reducers/countries";
import * as LayoutReducers from "../reducers/layout";
import * as RouterReducer from "../reducers/routes";
import * as CurrencyReducer from "../reducers/currency";

export interface IAppState {
    countries: Store<ICountry[]>;
    layout: Store<ILayout>;
    routes: Store<IRoutes>;
    currencies: Store<ICurrency[]>;
}

@Injectable()

export class AppStore implements IAppState {
    countries = new Store<ICountry[]>([]);
    layout = new Store<ILayout>(LayoutReducers.initialState);
    routes = new Store<IRoutes>(RouterReducer.initialState);
    currencies = new Store<ICurrency[]>([]);

    constructor() {
        this.reducersRegistration()
    }

    // -------------- reducers registration -------------- //

    reducersRegistration() {
        this.countries.registerReducer(CountriesReducers.ADD_COUNTRY);
        this.currencies.registerReducer(CurrencyReducer.ADD_CURRENCY);

        this.layout.registerReducer(LayoutReducers.CHANGE_ACTUAL_SITE);
        this.layout.registerReducer(LayoutReducers.LOADER_VISIBLE);
        this.layout.registerReducer(LayoutReducers.COUNTRY_DETAILS_VISIBLE);

        this.routes.registerReducer(RouterReducer.CHANGE_CURRENT_ROUTE);
        this.routes.registerReducer(RouterReducer.ROUTES_REGISTERING);
        this.routes.registerReducer(RouterReducer.REGISTER_NEW_ROUTE);
    }
}


