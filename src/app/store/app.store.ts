import {Injectable} from '@angular/core';
import {Store} from "../models/stores/store";

import {ICountry} from "../models/data/country";
import {ILayout} from "../models/stores/layout";
import {IRoutes} from "../models/stores/routes";
import {ICurrency} from "../models/data/currency";

import * as CountriesReducers from "../reducers/countries";
import * as LayoutReducers from "../reducers/layout";
import * as RouterReducer from "../reducers/routes";
import * as CurrencyReducer from "../reducers/currency";

interface IAppState {
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

    private reducersRegistration(): void {
        this.countries.registerReducer(CountriesReducers.ADD_COUNTRY);
        this.currencies.registerReducer(CurrencyReducer.ADD_CURRENCY);

        this.layout.registerReducer(LayoutReducers.SHOW_ALERT);
        this.layout.registerReducer(LayoutReducers.ALERT_VISIBLE);
        this.layout.registerReducer(LayoutReducers.LOADER_VISIBLE);

        this.routes.registerReducer(RouterReducer.CHANGE_CURRENT_ROUTE);
        this.routes.registerReducer(RouterReducer.ROUTES_REGISTERING);
        this.routes.registerReducer(RouterReducer.REGISTER_NEW_ROUTE);
    }
}


