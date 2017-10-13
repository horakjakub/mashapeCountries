import {Component, OnInit} from '@angular/core';
import {AppStore} from "../../store/app.store";
import {IRoute, IRoutes} from "../../models/stores/routes";
import {ICountry} from "../../models/data/country";
import {ICurrency} from "../../models/data/currency";
import {Actions} from "../../actions/actions";

@Component({
    selector: 'app-country-details',
    templateUrl: './country-details.component.html',
    styleUrls: ['./country-details.component.css'],
})

export class CountryDetailsComponent implements OnInit {
    visible: boolean;
    countries: ICountry[];
    allCurrencies: ICurrency[];
    selectedCountry: ICountry;
    selectedCurrencies: ICurrency[];

    constructor(private appStore: AppStore) {
        this.appStore.countries.subscribe(this.setCountries.bind(this));
        this.appStore.routes
            .map((router: IRoutes) => router.currentRoute)
            .distinctUntilChanged()
            .subscribe((currentRoute: IRoute) => {
                this.selectedCurrencies = undefined;
                this.selectedCountry = this.countries.find((country: ICountry) => country.name === currentRoute.path);
                if (this.selectedCountry !== undefined) {
                    this.visible = true;
                    Actions.Request.CurrenciesForPLN.emit(this.selectedCountry.currencies);
                    Actions.Store.LoaderVisible.emit(false);

                    if (this.allCurrencies !== undefined) {
                        this.selectConvertedCurrencies(this.selectedCountry.currencies);
                    }
                } else {
                    this.visible = false;
                }
            });

        this.appStore.currencies.subscribe(this.setCurrencies.bind(this));
    }

    setCountries(countries: ICountry[]): void {
        this.countries = countries;
    }


    setCurrencies(currencies: ICurrency[]): void {
        this.allCurrencies = currencies;
        if (this.selectedCountry) {
            this.selectConvertedCurrencies(this.selectedCountry.currencies)
        }
    }

    selectConvertedCurrencies(newCurrencies: string[]): void {
        this.selectedCurrencies = newCurrencies
            .map((newCurrency) => {
                return this.allCurrencies.find((curr) => {
                    return curr.from === newCurrency
                })
            }).filter(selectedCurrency => selectedCurrency !== undefined);
    }

    goBack(): void {
        Actions.Store.ChangeCurrentRoute.emit('');
    }

    ngOnInit() {
    }
}


