import {Action} from "../models/action";
import {ICountry} from "../models/country";
import {ICurrency} from "../models/currency";
import {IRoute} from "../models/routes";


export const Actions = {
    Store: {
        AddCountry: new Action<ICountry>('[COUNTRIES] Add new country to collection'),

        ChangeSiteTo: new Action<string>('[LAYOUT] Change actual site'),
        LoaderVisible: new Action<boolean>('[LAYOUT] Country-List visible?'),
        CountryDetailsVisible: new Action<boolean>('[LAYOUT] Country-Details visible?'),

        RegisterNewRoute: new Action<IRoute>(''),
        ChangeCurrentRoute: new Action<string>(''),
        RoutesRegistering: new Action<boolean>(''),

        AddCurrency: new Action<ICurrency>(''),

    },

    Request: {
        CurrenciesForPLN: new Action<string[]>(''),
        AllCountries: new Action<null>('')
    }
};
