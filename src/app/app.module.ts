import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrmaskerModule } from './directives/brmasker/brmasker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ BrmaskerModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
