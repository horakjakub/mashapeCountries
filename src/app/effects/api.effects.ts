import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from "../services/api.service";
import {Actions} from "../actions/actions";
import {ICountry} from "../models/data/country";
import {ModelFactory} from "../services/model-data.factory";
import {ICurrency} from "../models/data/currency";

@Injectable()

export class ApiEffects {
    constructor(private apiService: ApiService,
                private modelFactory: ModelFactory) {

        Actions.Request.AllCountries.subject.subscribe(() => {
            Actions.Store.RoutesRegistering.emit(true);
            return this.apiService.getAllCountriesList()
                .flatMap((value) => {
                    return Observable.from(value);
                }).subscribe((country: any) => {
                    let newCountry: ICountry = this.modelFactory.createCountry(
                        country.name,
                        country.capital,
                        country.population,
                        country.region,
                        country.currencies,
                        country.topLevelDomain,
                        country.alpha2Code,
                        country.alpha3Code,
                        country.callingCodes,
                        country.altSpellings,
                        country.subregion,
                        country.latlng,
                        country.demonym,
                        country.area,
                        country.gini,
                        country.timezones,
                        country.borders,
                        country.nativeName,
                        country.numericCode,
                        country.languages,
                        country.translations,
                        country.relevance
                    );

                    Actions.Store.AddCountry.emit(newCountry);
                    Actions.Store.RegisterNewRoute.emit({path: country.name, data: {}});
                }, (err) => {
                    this.showErrorAlert('Countries request error - status: "' + err.status + '"');
                }, () => {
                    Actions.Store.RoutesRegistering.emit(false);
                });
        });

        Actions.Request.CurrenciesForPLN.subject.flatMap((arrayOfCurrencies: string[]) => {
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
                    false
                );
            } else {
                newCurrency = this.modelFactory.createCurrency(
                    currency.from,
                    currency.from_amount,
                    currency.to,
                    currency.to_amount,
                    true
                );
            }
            Actions.Store.AddCurrency.emit(newCurrency);

        }, (err) => {
            this.showErrorAlert('Currency convert request error - status: "' + err.status + '"');
        })
    }

    showErrorAlert(errorMessage: string): void {
        Actions.Store.ShowAlert.emit({header: 'Error', message: errorMessage, visible: true});
    }
}
