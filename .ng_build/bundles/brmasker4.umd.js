(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.brmasker4 = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var BrmaskerDirective = (function () {
    function BrmaskerDirective() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BrmaskerDirective.prototype.inputChanged = function (event) {
        if (event.target.value) {
            event.target.value = this.onInput(event.target.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BrmaskerDirective.prototype.onInput = function (value) {
        var /** @type {?} */ ret = this.formataCampo(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    /**
     * @param {?} campo
     * @param {?} Mascara
     * @param {?} tamanho
     * @return {?}
     */
    BrmaskerDirective.prototype.formataCampo = function (campo, Mascara, tamanho) {
        var /** @type {?} */ boleanoMascara;
        var /** @type {?} */ exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\R|\$|\&|\%| /g;
        var /** @type {?} */ campoSoNumeros = campo.toString().replace(exp, '');
        var /** @type {?} */ posicaoCampo = 0;
        var /** @type {?} */ NovoValorCampo = '';
        var /** @type {?} */ TamanhoMascara = campoSoNumeros.length;
        for (var /** @type {?} */ i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === 'R'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
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
    'inputChanged': [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
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
