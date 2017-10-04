(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.brmasker4 = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Directive, args: [{
                selector: '[brmasker]'
            },] },
];
/**
 * @nocollapse
 */
BrmaskerDirective.ctorParameters = function () { return []; };
BrmaskerDirective.propDecorators = {
    'brmasker': [{ type: core.Input },],
};
var BrmaskerModule = (function () {
    function BrmaskerModule() {
    }
    return BrmaskerModule;
}());
BrmaskerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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

exports.BrmaskerModule = BrmaskerModule;
exports.ɵa = BrmaskerDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=brmasker4.umd.js.map
