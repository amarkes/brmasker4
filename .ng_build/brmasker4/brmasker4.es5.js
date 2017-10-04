import { Directive, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var BrmaskerDirective = (function () {
    function BrmaskerDirective() {
    }
    /**
     * @return {?}
     */
    BrmaskerDirective.prototype.ngOnInit = function () {
        console.log(this.brmasker);
    };
    return BrmaskerDirective;
}());
BrmaskerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[brmasker]'
            },] },
];
/**
 * @nocollapse
 */
BrmaskerDirective.ctorParameters = function () { return []; };
BrmaskerDirective.propDecorators = {
    'brmasker': [{ type: Input },],
};
var BrmaskerModule = (function () {
    function BrmaskerModule() {
    }
    return BrmaskerModule;
}());
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
BrmaskerModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { BrmaskerModule, BrmaskerDirective as ɵa };
//# sourceMappingURL=brmasker4.es5.js.map
