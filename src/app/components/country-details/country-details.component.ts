import {Component, OnInit} from '@angular/core';
import {AppStore} from "../../store/app.store";
import {IRoute, IRoutes} from "../../models/routes";
import {ICountry} from "../../models/country";
import {ICurrency} from "../../models/currency";

@Component({
    selector: 'app-country-details',
    templateUrl: './country-details.component.html',
    styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
    visible: boolean;
    countries: ICountry[];
    allCurrencies: ICurrency[];
    selectedCountry: ICountry;
    selectedCurrencies: any;

    constructor(private appStore: AppStore) {
        this.appStore.countries.subscribe(this.setCountries.bind(this));

        this.appStore.routes
            .map((router: IRoutes) => router.currentRoute)
            .subscribe((currentRoute: IRoute) => {
                this.selectedCountry = this.countries.find((country: ICountry) => country.name === currentRoute.path);
                if (this.selectedCountry !== undefined) {
                    this.visible = true;
                } else {
                    this.visible = false;
                }
            });

        this.appStore.currencies.subscribe(this.setCurrencies.bind(this));
    }

    setCountries(countries: ICountry[]) {
        this.countries = countries;
    }

    setCurrencies(currencies: ICurrency[]) {
        this.allCurrencies = currencies;
        if (this.selectedCountry) {
            this.selectCurrency(this.selectedCountry.currencies)
        }
    }

    selectCurrency(newCurrencies: string[]) {
        this.selectedCurrencies = newCurrencies
            .map((newCurrency) => {
                return this.allCurrencies.find((curr) => {
                    return curr.from === newCurrency
                })
            });
    }

    showCurrency(currencyCode) {
        return this.selectedCurrencies.find(currency => currency.from === currencyCode)
    }

    ngOnInit() {
    }

}
