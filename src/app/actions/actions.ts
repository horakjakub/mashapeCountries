import {Action} from "../models/action";
import {ICountry} from "../models/country";

export const Actions = {
    Store: {
        AddCountryToCollection: new Action<ICountry>('[COUNTRIES] Add new country to collection'),
        ChangeSiteTo: new Action<string>('[LAYOUT] Change actual site')
    }
};
