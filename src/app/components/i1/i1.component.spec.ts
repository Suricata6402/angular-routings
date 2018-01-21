import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I1Component } from './i1.component';

describe('I1Component', () => {
  let component: I1Component;
  let fixture: ComponentFixture<I1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
