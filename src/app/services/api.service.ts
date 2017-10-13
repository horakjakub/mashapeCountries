import {Injectable} from '@angular/core';
import {Headers, Http, Request, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import * as Api from './api.types';

@Injectable()

export class ApiService {
    private countriesServerUrl: string = "https://restcountries-v1.p.mashape.com";
    private currencyConverterServerUrl: string = "https://currencyconverter.p.mashape.com";
    private appToken: string = 'ra3f3Aa34SmshGG55GT4ofRUuyOtp1oYeOljsnAhDmp7rlVYlp';

    constructor(private http: Http) {
    }

    getAllCountriesList(): Observable<any> {
        return this.request(new Api.ApiGetAllCountriesRequest(), this.countriesServerUrl);
    }

    getConvertSelectedCurrencyToPLN(currencyCode: string): Observable<any> {
        return this.request(new Api.ApiConvertCurrencyToPLNRequest(currencyCode), this.currencyConverterServerUrl)
    }

    private request<T>(req: Api.IApiRequest<T>, serverUrl: string): Observable<T> {
        let token = this.appToken;

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Mashape-Key': token
        });

        let options = new RequestOptions({
            method: req.method, url: serverUrl + req.path,
            headers: headers, body: req.data ? JSON.stringify(req.data) : null
        });

        let httpRequest = new Request(options);

        return this.http.request(httpRequest)
            .map(response => {
                if (response.status == 204) { // No content
                    return null;
                } else {
                    return req.parse(response.json());
                }
            })
            .catch((errorResponse: Response) => {
                let requestUrl: string = serverUrl + req.path;
                return Observable.throw({status: errorResponse.statusText, url: requestUrl});
            });
    }

    // methods below was added and usesbecause API from server
    // "https://currencyconverter.p.mashape.com" stopped sending responds

    private currencyConverterServerUrl2: string = "https://currency-exchange.p.mashape.com";

    getConvertSelectedCurrencyToPLN2(currencyCode: string): Observable<any> {
        return this.requestForCurrency2(new Api.ApiConvertCurrencyToPLNRequest2(currencyCode), this.currencyConverterServerUrl2)
    }

    private requestForCurrency2<T>(req: Api.IApiRequest<T>, serverUrl: string): Observable<T> {
        let token = this.appToken;

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Mashape-Key': token
        });

        let options = new RequestOptions({
            method: req.method, url: serverUrl + req.path,
            headers: headers, body: req.data ? JSON.stringify(req.data) : null
        });

        let httpRequest = new Request(options);

        return this.http.request(httpRequest)
            .map(response => {
                if (response.status == 204) { // No content
                    return null;
                } else {
                    let countryCode = response.url.slice(response.url.indexOf('from=') + 5, response.url.indexOf('from=') + 8);
                    return req.parse({code: countryCode, val: response.json()});
                }
            })
            .catch((errorResponse: Response) => {
                let requestUrl: string = serverUrl + req.path;
                return Observable.throw({status: errorResponse.statusText, url: requestUrl});
            });
    }
}
