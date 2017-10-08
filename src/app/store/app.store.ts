import {Injectable} from '@angular/core';
import {Store} from "../models/store";

import {ICountry} from "../models/country";
import {ILayout} from "../models/layout";

import * as CountriesReducers from "../reducers/countries";
import * as LayoutReducers from "../reducers/layout"

export interface IAppState {
    countries: Store<ICountry[]>;
    layout: Store<ILayout>;
}

@Injectable()

export class AppStore implements IAppState {
    countries = new Store<ICountry[]>([]);
    layout = new Store<ILayout>({actualView: ''});
    // convertedCurrencies: Store = new Store()

    // add states listening
    // remove immutable
    // add reducer function as a interface

    constructor() {
        this.reducersRegistration()
    }

    // -------------- reducers registration -------------- //

    reducersRegistration() {
        this.countries.registerReducer(CountriesReducers.ADD_ITEM);

        this.layout.registerReducer(LayoutReducers.CHANGE_ACTUAL_SITE);
    }


}


