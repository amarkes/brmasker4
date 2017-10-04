import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
export class HeaderModule {
}
HeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    HeaderComponent
                ],
                exports: [
                    HeaderComponent // <-- this!
                ]
            },] },
];
/**
 * @nocollapse
 */
HeaderModule.ctorParameters = () => [];
function HeaderModule_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HeaderModule.ctorParameters;
}
//# sourceMappingURL=header.module.js.map