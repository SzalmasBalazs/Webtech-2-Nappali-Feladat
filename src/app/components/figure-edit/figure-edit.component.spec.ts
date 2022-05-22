import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FigureEditComponent } from './figure-edit.component';

describe('ProductEditComponent', () => {
  let component: FigureEditComponent;
  let fixture: ComponentFixture<FigureEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigureEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
