import { Component } from '@angular/core';
export class HeaderComponent {
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
function HeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    HeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    HeaderComponent.ctorParameters;
}
//# sourceMappingURL=header.component.js.map