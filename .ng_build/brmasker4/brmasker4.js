import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class HeaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-header',
                template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
                styles: [`
    h1 {
      color: red; }
  `]
            },] },
];
/**
 * @nocollapse
 */
HeaderComponent.ctorParameters = () => [];

class HeaderModule {
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

/**
 * Generated bundle index. Do not edit.
 */

export { HeaderModule, HeaderComponent as ɵa };
//# sourceMappingURL=brmasker4.js.map
