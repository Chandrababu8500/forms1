/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetValuePatchValueComponent } from './setValuePatchValue.component';

describe('SetValuePatchValueComponent', () => {
  let component: SetValuePatchValueComponent;
  let fixture: ComponentFixture<SetValuePatchValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetValuePatchValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetValuePatchValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
