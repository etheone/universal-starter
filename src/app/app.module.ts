import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF, Location } from '@angular/common';

import { AppComponent } from './app.component';
import { ExtraComponent } from './extra.component';
import { HomeComponent } from './home/home.component';
import { getBaseLocation } from './shared/common-function.util';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch:'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF,
    useFactory: getBaseLocation 
  }
  ],
  bootstrap: [AppComponent, ExtraComponent]
})
export class AppModule { }
