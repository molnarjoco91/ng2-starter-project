import {HomeComponent} from "./home.component";
import {Ng2StateDeclaration, Transition} from "ui-router-ng2";
/**
 * This file defines the states for the `bar` module.
 * The states are exported as an array and imported in the BarModule.
 */
export let HOME_STATES: Ng2StateDeclaration[] = [
    // A state for the 'app.home' submodule.
    // - Fills in the unnamed <ui-view> ($default) from `app` state with `BarListComponent`
    // - Fills in the footer <ui-view name="footer"> from `app` state with `BarFooterComponent`
    // - Fetches barList data using a resolve, then the component displays the data
    {
        name: 'app.home',
        url: '/',
        views: {
            $default: {component: HomeComponent}
        },
        resolve: []
    }
];


