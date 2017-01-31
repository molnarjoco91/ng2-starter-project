import {AppComponent} from "./app.component";
import {Ng2StateDeclaration, loadNgModule} from "ui-router-ng2";

/** The top level state(s) */
export let STATES: Ng2StateDeclaration[] = [
    // The top-level app state.
    // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
    {name: 'app', component: AppComponent}
];
