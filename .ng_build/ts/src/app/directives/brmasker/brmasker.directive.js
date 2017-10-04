import { Directive, Input } from '@angular/core';
export class BrmaskerDirective {
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
function BrmaskerDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    BrmaskerDirective.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BrmaskerDirective.ctorParameters;
    /** @type {?} */
    BrmaskerDirective.propDecorators;
    /** @type {?} */
    BrmaskerDirective.prototype.brmasker;
}
//# sourceMappingURL=brmasker.directive.js.map