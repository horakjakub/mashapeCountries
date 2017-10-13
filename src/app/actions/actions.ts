import {Action} from "../models/action";
import {ICountry} from "../models/data/country";
import {ICurrency} from "../models/data/currency";
import {IRoute} from "../models/stores/routes";
import {IAlert} from "../models/stores/alerts";

export const Actions = {
    Store: {
        AddCountry: new Action<ICountry>('[COUNTRIES] Add new country to countries collection'),

        LoaderVisible: new Action<boolean>('[LAYOUT] Loader visible?'),
        ShowAlert: new Action<IAlert>('[LAYOUT] Show Alert with some message'),
        AlertVisible: new Action<boolean>('[LAYOUT] Alert visible?'),

        RegisterNewRoute: new Action<IRoute>('[ROUTES] New routes registered'),
        ChangeCurrentRoute: new Action<string>('[ROUTES] Change current Route'),
        RoutesRegistering: new Action<boolean>('[ROUTES] Routes registering?'),

        AddCurrency: new Action<ICurrency>('[CURRENCIES] Add new currency to currencies collection'),
    },

    Request: {
        CurrenciesForPLN: new Action<string[]>('[REQUEST] Make requests for currencies convert'),
        AllCountries: new Action<null>('[REQUEST] Make requests for all countries list')
    }
};
