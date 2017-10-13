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

        newCountry.name = name;
        newCountry.capital = capital;
        newCountry.population = population;
        newCountry.region = region;
        newCountry.currencies = currencies;
        newCountry.topLevelDomain = topLevelDomain;
        newCountry.alpha2Code = alpha2Code;
        newCountry.alpha3Code = alpha3Code;
        newCountry.callingCodes = callingCodes;
        newCountry.altSpellings = altSpellings;
        newCountry.subregion = subregion;
        newCountry.latlng = latlng;
        newCountry.demonym = demonym;
        newCountry.area = area;
        newCountry.gini = gini;
        newCountry.timezones = timezones;
        newCountry.borders = borders;
        newCountry.nativeName = nativeName;
        newCountry.numericCode = numericCode;
        newCountry.languages = languages;
        newCountry.translations = translations;
        newCountry.relevance = relevance;

        return newCountry;
    }

    createCurrency(from?: string,
                   from_amount?: number,
                   to?: string,
                   to_amount?: number,
                   supported?: boolean): ICurrency {
        let newCurrency: any = {};

        newCurrency.from = from;
        newCurrency.from_amount = from_amount;
        newCurrency.to = to;
        newCurrency.to_amount = to_amount;
        newCurrency.supported = supported;

        return newCurrency;
    }
}