(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.brmasker4 = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-header',
                template: "\n    <h1>\n      <ng-content></ng-content>\n    </h1>\n  ",
                styles: ["\n    h1 {\n      color: red; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = function () { return []; };
var HeaderModule = (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());
HeaderModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
HeaderModule.ctorParameters = function () { return []; };

exports.HeaderModule = HeaderModule;
exports.ɵa = HeaderComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=brmasker4.umd.js.map
