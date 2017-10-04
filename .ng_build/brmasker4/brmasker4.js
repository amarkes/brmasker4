import { Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class BrmaskerDirective {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.brmasker);
    }
}
BrmaskerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[brmasker]'
            },] },
];
/**
 * @nocollapse
 */
BrmaskerDirective.ctorParameters = () => [];
BrmaskerDirective.propDecorators = {
    'brmasker': [{ type: Input },],
};

class BrmaskerModule {
}
BrmaskerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    BrmaskerDirective
                ],
                declarations: [BrmaskerDirective]
            },] },
];
/**
 * @nocollapse
 */
BrmaskerModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { BrmaskerModule, BrmaskerDirective as ɵa };
//# sourceMappingURL=brmasker4.js.map
