// ---------------- ANGULAR  ------------------- //
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {Router, RouterModule} from "@angular/router";
// ---------------- SERVICES  ------------------- //
import {ApiService} from './services/api.service';
import {AppStore} from "./store/app.store";
import {ModelFactory} from "./services/model-data.factory"
// ---------------- COMPONENTS  ------------------- //
import {AppComponent} from './app.component';
// ---------------- EFFECTS  ------------------- //
import {ApiEffects} from './effects/api.effects'

// ---------------- ACTION  ------------------- //

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([{path: "", component: AppComponent}])
    ],
    providers: [
        ApiService,
        AppStore,
        ApiEffects,
        ModelFactory
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
    countries: any;
    currency: any;

    constructor(private apiService: ApiService,
                private appStore: AppStore,
                private router: Router,
                private apiEffects: ApiEffects) {
        // this.apiService.getAllCountriesList().subscribe(this.setCountries.bind(this));
        // this.apiService.getConvertSelectedCurrencyToPLN('USD').subscribe(this.setCurrency.bind(this));

        this.appStore.countries.subscribe(this.setCountriesCollection.bind(this));
        this.router.events.subscribe((val) => {
            // add mapping of types
        })
    }

    setCurrency(currency) {
        this.currency = currency;
    }

    setCountriesCollection(countriesCollection) {
        debugger;
    }
}
