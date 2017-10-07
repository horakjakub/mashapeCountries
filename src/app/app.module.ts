// ---------------- ANGULAR  ------------------- //

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {ApiService} from './services/api.service';


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HttpModule
  ],
    providers: [
        ApiService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
    countries: any;

    constructor(private apiService: ApiService) {

        this.apiService.getAllCountriesList().subscribe(this.setCountries.bind(this));
        this.apiService.getConvertSelectedCurrencyToPLN('USD').subscribe(this.setCurrency.bind(this));
    }

    setCountries(countries) {
        this.countries = countries;
    }

    setCurrency(currency) {
    }
}
