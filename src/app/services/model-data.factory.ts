import {ICountry} from "../models/country";
import {ICurrency} from "../models/currency";

export class ModelFactory {
    createCountry(name?: string,
                  capital?: string,
                  population?: number,
                  region?: string,
                  currencies?: string[]): ICountry {
        let newCountry: any = {};

        newCountry.name = name || undefined;
        newCountry.capital = capital || undefined;
        newCountry.population = population || undefined;
        newCountry.region = region || undefined;
        newCountry.currencies = currencies || undefined;

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
        newCurrency.to_amount = to_amount || undefined;

        return newCurrency;
    }
}