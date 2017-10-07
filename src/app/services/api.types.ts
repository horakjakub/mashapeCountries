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
        this.path = '?from=' + currencyCode + '&from_amount=1&to=PLN'
    }

    parse(data: any): string {
        return data;
    }
}