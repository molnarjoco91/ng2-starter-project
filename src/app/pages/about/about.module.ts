import {UIRouterModule} from "ui-router-ng2";
import {NgModule} from "@angular/core";
import {AboutComponent} from "./about.component";
import {ABOUT_STATES} from "./about.states";

/** The Home NgModule */
@NgModule({
    imports: [
        UIRouterModule.forChild({states: ABOUT_STATES})
    ],
    declarations: [
        AboutComponent,
    ]
})
export class AboutModule {
}

