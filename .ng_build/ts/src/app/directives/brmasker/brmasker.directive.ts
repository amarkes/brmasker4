import { Directive, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[brmasker]'
})
export class BrmaskerDirective implements OnInit {
  @Input() brmasker: any;

  constructor() {
  }
  ngOnInit(): void {
    console.log(this.brmasker);
  }


}
