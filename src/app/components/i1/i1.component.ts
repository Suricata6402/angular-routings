import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-i1',
  templateUrl: './i1.component.html',
  styleUrls: ['./i1.component.css']
})
export class I1Component implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params)
    })
  }

}
