import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ExempleComponent } from './exemple.component';
import { BrmaskerModule } from './directives/brmasker/brmasker.module';

@NgModule({
  declarations: [
    ExempleComponent
  ],
  exports: [
    BrmaskerModule
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [ExempleComponent]
})
export class BrMaske4Module { }
