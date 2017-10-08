import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrMaskerDirective } from './directives/brmasker4';

@NgModule({
  declarations: [
    BrMaskerDirective
  ],
  exports: [
    BrMaskerDirective
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BrMasker4Module {}
