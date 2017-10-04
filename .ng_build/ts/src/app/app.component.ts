import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to app!</h1>
    <input type="text" name="cpf" placeholder="CPF" [brmasker]="'teste'" value="">
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'app';
}
