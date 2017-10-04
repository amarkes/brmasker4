import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrmaskerDirective } from './brmasker.directive';

@NgModule({
  imports: [ CommonModule ],
  exports: [ BrmaskerDirective ],
  declarations: [ BrmaskerDirective ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BrmaskerModule { }
