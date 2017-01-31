import {NgModule, ModuleWithProviders}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {
    Navbar
} from "./components";


import {} from './directives';


import {
    EmailValidator,
    EqualPasswordsValidator
} from './validators';

const NGA_COMPONENTS = [
    Navbar
];

const NGA_DIRECTIVES = [];

const NGA_PIPES = [];

const NGA_SERVICES = [];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

@NgModule({
    declarations: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: NgaModule,
            providers: [
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
