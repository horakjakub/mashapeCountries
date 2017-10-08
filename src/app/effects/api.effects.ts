import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from "../services/api.service";
import {Actions} from "../actions/actions";
import {ICountry} from "../models/country";
import {ModelFactory} from "../services/model-data.factory";
import {ICurrency} from "../models/currency";

@Injectable()

export class ApiEffects {
    constructor(private apiService: ApiService,
                private modelFactory: ModelFactory) {

        this.apiService.getAllCountriesList().flatMap((value) => {
            return Observable.from(value)
        }).subscribe((country: any) => {

            let newCountry: ICountry = this.modelFactory.createCountry(
                country.name,
                country.capital,
                country.population,
                country.region,
                country.currencies
            );

            Actions.Store.AddCountry.emit(newCountry);
            Actions.Store.RegisterNewRoute.emit({path: country.name, data: {}});
        });

        Actions.MakeRequestForCurrencies.subject.flatMap((arrayOfCurrencies: string[]) => {
            if (arrayOfCurrencies && arrayOfCurrencies.length > 0) {
                return Observable.from(arrayOfCurrencies)
            }
        }).flatMap((currencyCode: string) => {
            return this.apiService.getConvertSelectedCurrencyToPLN(currencyCode);
        }).subscribe((currency) => {
            let newCurrency: ICurrency;
            if (currency.error) {
                newCurrency = this.modelFactory.createCurrency(
                    currency.from,
                    currency.from_amount,
                    currency.to,
                    currency.to_amount,
                    true
                );
            } else {
                newCurrency = this.modelFactory.createCurrency(
                    currency.from,
                    currency.from_amount,
                    currency.to,
                    currency.to_amount,
                    false
                );
            }
            Actions.Store.AddCurrency.emit(newCurrency);
        })
    }
}
