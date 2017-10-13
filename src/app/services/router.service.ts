import {Injectable} from '@angular/core';
import {Location} from "@angular/common";
import {NavigationStart, Router} from "@angular/router"
import {Actions} from "../actions/actions";
import {AppStore} from "../store/app.store";
import {IRoute, IRoutes} from "../models/stores/routes";

@Injectable()

export class RouterService {
    routesAreLoading: boolean;
    pathWaitingToBeChecked: string;
    registeredRoutes: IRoute[];

    constructor(private router: Router,
                private appStore: AppStore,
                private location: Location) {
        this.appStore.routes
            .map((routes: IRoutes) => routes.loading)
            .distinctUntilChanged()
            .subscribe((loading) => {
                this.routesAreLoading = loading;
                if (!this.routesAreLoading && this.pathWaitingToBeChecked &&
                    this.isRegisteredRouteForThisUrl(this.pathWaitingToBeChecked)) {
                    setTimeout(() => {
                        Actions.Store.ChangeCurrentRoute.emit(this.pathWaitingToBeChecked);
                    }, 0);
                } else if (!this.routesAreLoading && this.pathWaitingToBeChecked &&
                    !this.isRegisteredRouteForThisUrl(this.pathWaitingToBeChecked)) {
                    setTimeout(() => {
                        Actions.Store.ChangeCurrentRoute.emit('');
                        this.location.go('')
                    }, 0);
                    this.pathWaitingToBeChecked = undefined;
                }
            });


        this.appStore.routes
            .map((routes: IRoutes) => {
                return routes.currentRoute.path
            })
            .distinctUntilChanged()
            .skip(1)
            .subscribe((path: string) => {
                this.location.go(path)
            });


        this.appStore.routes
            .map((routes: IRoutes) => routes.registeredRoutes)
            .subscribe((routes) => {
                this.registeredRoutes = routes;
            });


        this.router.events.filter(view => view instanceof NavigationStart).subscribe((view: any) => {
            let path = view.url.slice(1, view.url.length).replace(/%20/g, " ");
            if (!this.routesAreLoading) {
                Actions.Store.ChangeCurrentRoute.emit(path)
            } else {
                if (this.isRegisteredRouteForThisUrl(path)) {
                    Actions.Store.ChangeCurrentRoute.emit(path);
                } else {
                    this.pathWaitingToBeChecked = path;
                }
            }
        })
    }

    private isRegisteredRouteForThisUrl(path: string): boolean {
        if (this.registeredRoutes.find((route) => route.path === path)) {
            return true;
        } else {
            return false;
        }
    }

}
