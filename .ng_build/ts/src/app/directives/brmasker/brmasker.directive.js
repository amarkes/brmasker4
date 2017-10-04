import { Directive, Input, HostListener } from '@angular/core';
export class BrmaskerDirective {
    constructor() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    inputChanged(event) {
        if (event.target.value) {
            event.target.value = this.onInput(event.target.value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInput(value) {
        const /** @type {?} */ ret = this.formataCampo(value, this.brmaskere.mask, this.brmaskere.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    }
    /**
     * @param {?} campo
     * @param {?} Mascara
     * @param {?} tamanho
     * @return {?}
     */
    formataCampo(campo, Mascara, tamanho) {
        let /** @type {?} */ boleanoMascara;
        const /** @type {?} */ exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\R|\$|\&|\%| /g;
        const /** @type {?} */ campoSoNumeros = campo.toString().replace(exp, '');
        let /** @type {?} */ posicaoCampo = 0;
        let /** @type {?} */ NovoValorCampo = '';
        let /** @type {?} */ TamanhoMascara = campoSoNumeros.length;
        for (let /** @type {?} */ i = 0; i < TamanhoMascara; i++) {
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
    }
}
BrmaskerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[brmasker]' // Attribute selector
            },] },
];
/**
 * @nocollapse
 */
BrmaskerDirective.ctorParameters = () => [];
BrmaskerDirective.propDecorators = {
    'brmaskere': [{ type: Input, args: ['brmasker',] },],
    'inputChanged': [{ type: HostListener, args: ['keyup', ['$event'],] },],
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
    BrmaskerDirective.prototype.brmaskere;
}
//# sourceMappingURL=brmasker.directive.js.map