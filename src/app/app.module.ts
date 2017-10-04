import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExempleComponent } from './exemple.component';
import { BrmaskerModule } from './directives/brmasker/brmasker.module';

@NgModule({
  declarations: [
    ExempleComponent
  ],
  imports: [
    BrowserModule,
    BrmaskerModule
  ],
  providers: [],
  bootstrap: [ExempleComponent]
})
export class BrMaske4Module { }
