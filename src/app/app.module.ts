// ---------------- ANGULAR  ------------------- //
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {NavigationStart, Router, RouterModule} from "@angular/router";
// ---------------- SERVICES  ------------------- //
import {ApiService} from './services/api.service';
import {AppStore} from "./store/app.store";
import {ModelFactory} from "./services/model-data.factory"
// ---------------- COMPONENTS  ------------------- //
import {AppComponent} from './components/app.component';
import {CountryDetailsComponent} from './components/country-details/country-details.component'
import {CountryListComponent} from './components/country-list/country-list.component';
// ---------------- EFFECTS  ------------------- //
import {ApiEffects} from './effects/api.effects';
import {Actions} from "./actions/actions";

// ---------------- ACTION  ------------------- //

@NgModule({
    declarations: [
        AppComponent,
        CountryDetailsComponent,
        CountryListComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule,
        RouterModule.forRoot([
            {path: "**", component: CountryListComponent}
        ])
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

        // Actions.Store.RegisterNewRoute.emit({path: "", component: CountryListComponent })

        // this.appStore.countries.subscribe(this.setCountriesCollection.bind(this));

        this.router.events.filter((view) => view instanceof NavigationStart).subscribe((view: any) => {
            Actions.Store.ChangeCurrentRoute.emit(view.url);
        })
    }

    // setCurrency(currency) {
    //     this.currency = currency;
    // }
    //
    // setCountriesCollection(countriesCollection) {
    // }
}
