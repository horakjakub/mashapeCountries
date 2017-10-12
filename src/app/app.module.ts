// ---------------- ANGULAR  ------------------- //
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
// ---------------- SERVICES  ------------------- //
import {ApiService} from './services/api.service';
import {AppStore} from "./store/app.store";
import {ModelFactory} from "./services/model-data.factory"
import {RouterService} from "./services/router.service";
// ---------------- COMPONENTS  ------------------- //
import {AppComponent} from './components/app.component';
import {CountryDetailsComponent} from './components/country-details/country-details.component'
import {CountryListComponent} from './components/country-list/country-list.component';
import {LoaderSmallComponent} from './components/loader-small/loader-small.component';
import {AlertComponent} from './components/alert/alert.component';
import {LoaderFullWidthComponent} from './components/loader-full-width/loader-full-width.component';
// ---------------- EFFECTS  ------------------- //
import {ApiEffects} from './effects/api.effects';
import {Actions} from "./actions/actions";
// ---------------- PIPES  ------------------- //
import {KeysPipe} from './pipes/keys.pipe';

// ---------------- ACTION  ------------------- //

@NgModule({
    declarations: [
        AppComponent,
        CountryDetailsComponent,
        CountryListComponent,
        LoaderFullWidthComponent,
        KeysPipe,
        LoaderSmallComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([{path: "**", component: AppComponent}]),
    ],
    providers: [
        ApiService,
        AppStore,
        ApiEffects,
        ModelFactory,
        RouterService
    ],
  bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private apiService: ApiService,
                private appStore: AppStore,
                private apiEffects: ApiEffects,
                private routerService: RouterService) {
        Actions.Request.AllCountries.emit(null);
        Actions.Store.LoaderVisible.emit(true);
    }
}
