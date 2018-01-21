import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './root/app.component';
import { UsersComponent } from './components/users/users.component';
import { CartComponent } from './components/cart/cart.component';
import { I1Component } from './components/i1/i1.component';
import { I2Component } from './components/i2/i2.component';
import { I3Component } from './components/i3/i3.component';

import { AccessCartGuard } from './guards/access-cart.guard'

import { appRoute } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CartComponent,
    I1Component,
    I2Component,
    I3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    AccessCartGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
