export interface IApiRequest<T> {
    method: string;
    path: string;
    data: any;

    parse(data: any): T;
}

export class ApiGetAllCountriesRequest implements IApiRequest<string> {
    method = 'GET';
    data: any;
    path = '/all';

    constructor() {
    }

    parse(data: any): string {
        return data;
    }
}

export class ApiConvertCurrencyToPLNRequest implements IApiRequest<string> {
    method = 'GET';
    data: any;
    path = '';

    constructor(currencyCode: string) {
        this.path = '?from=' + currencyCode + '&from_amount=1&to=PLN';
    }

    parse(data: any): string {
        return data;
    }
}

// method below was added and used
// because API from server "https://currencyconverter.p.mashape.com" stopped sending responds

export class ApiConvertCurrencyToPLNRequest2 implements IApiRequest<string> {
    method = 'GET';
    data: any;
    path = '/exchange';

    constructor(currencyCode: string) {
        this.path = this.path + '?from=' + currencyCode + '&q=1.0&to=PLN';
    }

    parse(data: any): string {
        return data;
    }
}