import {Component, OnInit} from '@angular/core';
import {AppStore} from "../../store/app.store";
// import {IRouter, IRoute} from "../../models/router";
import {ICountry} from "../../models/country";
import {IRoute, IRoutes} from "../../models/routes";
import {Actions} from "../../actions/actions";

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
    visible: boolean;
    countries: ICountry[];

    constructor(private appStore: AppStore) {

        this.appStore.routes
            .map((router: IRoutes) => router.currentRoute)
            .subscribe((currentRoute: IRoute) => {
                if (currentRoute.path === "") {
                    this.visible = true;
                } else {
                    this.visible = false;
                }
            });

        this.appStore.countries.subscribe(this.setCountries.bind(this))
    }


    setCountries(countries: ICountry[]) {
        this.countries = countries;
    }

    changeRoute(country) {
        Actions.Store.ChangeCurrentRoute.emit(country.name);
        Actions.MakeRequestForCurrencies.emit(country.currencies);
    }

    ngOnInit() {
    }
}
