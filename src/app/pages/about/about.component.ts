import {Component} from '@angular/core';

/**
 * This component has "barList" (resolve data) injected into the constructor.
 *
 * It creates a list of uiSref (links) to the bar details and highlights the active uiSref
 * It provides a <ui-view> viewport for a child state to fill in
 */

@Component({
    selector: 'about',
    templateUrl: './about.html'
})
export class AboutComponent {
    constructor() {
    }
}
