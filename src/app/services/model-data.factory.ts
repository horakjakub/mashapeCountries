import {ICountry} from "../models/data/country";
import {ICurrency} from "../models/data/currency";

export class ModelFactory {
    createCountry(name?: string,
                  capital?: string,
                  population?: number,
                  region?: string,
                  currencies?: string[],
                  topLevelDomain?: string[],
                  alpha2Code?: string,
                  alpha3Code?: string,
                  callingCodes?: string[],
                  altSpellings?: string[],
                  subregion?: string,
                  latlng?: number[],
                  demonym?: string,
                  area?: number,
                  gini?: number,
                  timezones?: string[],
                  borders?: string[],
                  nativeName?: string,
                  numericCode?: string,
                  languages?: string[],
                  translations?: { [key: string]: string },
                  relevance?: number): ICountry {
        let newCountry: any = {};

        newCountry.name = name || undefined;
        newCountry.capital = capital || undefined;
        newCountry.population = population || undefined;
        newCountry.region = region || undefined;
        newCountry.currencies = currencies || undefined;
        newCountry.topLevelDomain = topLevelDomain || undefined;
        newCountry.alpha2Code = alpha2Code || undefined;
        newCountry.alpha3Code = alpha3Code || undefined;
        newCountry.callingCodes = callingCodes || undefined;
        newCountry.altSpellings = altSpellings || undefined;
        newCountry.subregion = subregion || undefined;
        newCountry.latlng = latlng || undefined;
        newCountry.demonym = demonym || undefined;
        newCountry.area = area || undefined;
        newCountry.gini = gini || undefined;
        newCountry.timezones = timezones || undefined;
        newCountry.borders = borders || undefined;
        newCountry.nativeName = nativeName || undefined;
        newCountry.numericCode = numericCode || undefined;
        newCountry.languages = languages || undefined;
        newCountry.translations = translations || undefined;
        newCountry.relevance = relevance || undefined;

        return newCountry;
    }

    createCurrency(from?: string,
                   from_amount?: number,
                   to?: string,
                   to_amount?: number,
                   supported?: boolean): ICurrency {
        let newCurrency: any = {};

        newCurrency.from = from || undefined;
        newCurrency.from_amount = from_amount || undefined;
        newCurrency.to = to || undefined;
        newCurrency.to_amount = to_amount || undefined;
        newCurrency.supported = supported || undefined;

        return newCurrency;
    }
}