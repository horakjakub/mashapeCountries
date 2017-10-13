import {Component, OnInit} from '@angular/core';
import {AppStore} from "../../store/app.store";
import {IAlert} from "../../models/stores/alerts";
import {ILayout} from "../../models/stores/layout";
import {Actions} from "../../actions/actions";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
    visible: boolean;
    message: string;
    header: string;

    constructor(private appStore: AppStore) {
        this.appStore.layout
            .map((layout: ILayout) => layout.alert)
            .subscribe((alertInfo: IAlert) => {
                this.message = alertInfo.message;
                this.visible = alertInfo.visible;
                this.header = alertInfo.header;
            });
    }

    hideAlert(): void {
        Actions.Store.AlertVisible.emit(false)
    }

    ngOnInit() {
    }

}
