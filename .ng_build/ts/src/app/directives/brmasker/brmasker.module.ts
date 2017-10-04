import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrmaskerDirective } from './brmasker.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    BrmaskerDirective
  ],
  declarations: [BrmaskerDirective]
})
export class BrmaskerModule { }
