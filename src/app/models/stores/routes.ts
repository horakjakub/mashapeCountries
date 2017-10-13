export interface IRoutes {
    loading: boolean;
    currentRoute: IRoute,
    registeredRoutes: IRoute[];
}

export interface IRoute {
    path: string;
    data: any;
}

