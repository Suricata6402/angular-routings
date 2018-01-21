import { Component } from '@angular/core';
import { Routes } from '@angular/router'
import { appRoute } from './../app.routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  routes: Routes = appRoute;
  title = 'app';
}
