import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
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
HeaderModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=brmasker4.es5.js.map
