import {ICountry} from "../models/country";

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
}