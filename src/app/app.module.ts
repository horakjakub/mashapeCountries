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
// ---------------- EFFECTS  ------------------- //
import {ApiEffects} from './effects/api.effects';
import {Actions} from "./actions/actions";
import {LoaderFullWidthComponent} from './components/loader-full-width/loader-full-width.component';
// ---------------- PIPES  ------------------- //
import {KeysPipe} from './pipes/keys.pipe';
import {LoaderSmallComponent} from './components/loader-small/loader-small.component';

// ---------------- ACTION  ------------------- //

@NgModule({
    declarations: [
        AppComponent,
        CountryDetailsComponent,
        CountryListComponent,
        LoaderFullWidthComponent,
        KeysPipe,
        LoaderSmallComponent,
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
