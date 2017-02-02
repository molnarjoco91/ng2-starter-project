import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent}  from './app.component';
import {UIRouterModule, UIView} from "ui-router-ng2";
import {STATES} from "./app.states";
import {HomeModule} from "./pages/home/home.module";
import {AboutModule} from "./pages/about/about.module";
import {Navbar} from "./theme/components/navbar/navbar.component";

@NgModule({
    imports: [
        NgbModule.forRoot(),
        UIRouterModule.forRoot({
            states: STATES,
            otherwise: {state: 'app', params: {}},
            useHash: true
        }),
        BrowserModule,
        FormsModule,
        HomeModule,
        AboutModule
    ],
    declarations: [AppComponent, Navbar],
    bootstrap: [UIView]
})

export class AppModule {
}

