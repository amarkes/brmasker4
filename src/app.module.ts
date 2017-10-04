import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrMaskerDirective } from './directives/brmasker4';

@NgModule({
  declarations: [
    BrMaskerDirective
  ],
  exports: [
    BrMaskerDirective
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BrMasker4Module {}
