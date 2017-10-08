import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from "../services/api.service";
import {Actions} from "../actions/actions";
import {ICountry} from "../models/country";
import {ModelFactory} from "../services/model-data.factory"

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

            Actions.Store.AddCountryToCollection.emit(newCountry);
        });
    }
}
