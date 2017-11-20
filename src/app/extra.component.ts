import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'extra-comp',
  template: `<h3>THIS IS AN EXTRA COMPONENT!</h3>`,
  encapsulation: ViewEncapsulation.Native
})
export class ExtraComponent implements OnInit {


  constructor() {}

  ngOnInit() {
  }
}