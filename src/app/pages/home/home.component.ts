import {Component} from '@angular/core';
import 'style-loader!./home.scss';

/**
 * This component has "home" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the bar details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {
    constructor() {
    }
}
