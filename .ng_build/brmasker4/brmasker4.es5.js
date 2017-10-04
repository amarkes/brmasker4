import { Directive, HostListener, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
        var /** @type {?} */ ret = this.formataCampo(value, this.brmaskere.mask, this.brmaskere.len);
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
    { type: Directive, args: [{
                selector: '[brmasker]' // Attribute selector
            },] },
];
/**
 * @nocollapse
 */
BrmaskerDirective.ctorParameters = function () { return []; };
BrmaskerDirective.propDecorators = {
    'brmaskere': [{ type: Input, args: ['brmasker',] },],
    'inputChanged': [{ type: HostListener, args: ['keyup', ['$event'],] },],
};
var BrmaskerModule = (function () {
    function BrmaskerModule() {
    }
    return BrmaskerModule;
}());
BrmaskerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
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
