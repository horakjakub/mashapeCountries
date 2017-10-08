import {Component} from '@angular/core';
import {AppStore} from "./store/app.store";
import {ICountry} from "./models/country";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AppStore]
})

export class AppComponent {
    countries: ICountry[];

    constructor(private appStore: AppStore) {
        this.appStore.countries.subscribe(this.setCountries.bind(this))
    }

    setCountries(countries: ICountry[]) {
        debugger;
        this.countries = countries;
    }
}
