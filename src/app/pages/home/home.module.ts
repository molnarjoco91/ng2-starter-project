import {UIRouterModule} from "ui-router-ng2";
import {HOME_STATES} from "./home.states";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";

/** The Home NgModule */
@NgModule({
    imports: [
        UIRouterModule.forChild({states: HOME_STATES})
    ],
    declarations: [
        HomeComponent,
    ]
})
export class HomeModule {
}

