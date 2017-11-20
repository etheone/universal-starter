import { Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="container">Universal Demo using Angular YOOOOOO</h1>
 <button (click)="Navigate()">Click me</button>
 <router-outlet></router-outlet>
  `,
  styleUrls:['./home-styles.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  constructor(private router: Router) {}

  Navigate() {
    this.router.navigateByUrl("/home", { skipLocationChange: true });
  }

}
