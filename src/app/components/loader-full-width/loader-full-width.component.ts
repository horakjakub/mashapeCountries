import {Component, OnInit} from '@angular/core';
import {AppStore} from "../../store/app.store";
import {ILayout} from "../../models/layout";

@Component({
    selector: 'app-loader-full-width',
    templateUrl: './loader-full-width.component.html',
    styleUrls: ['./loader-full-width.component.css']
})
export class LoaderFullWidthComponent implements OnInit {
    visible: boolean;

    constructor(private appStore: AppStore) {
        this.appStore.layout.map((layout: ILayout) => layout.loaderVisible).subscribe(
            (visible: boolean) => {
                this.visible = visible;
            }
        )
    }

    ngOnInit() {
    }

}
