/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExPipeComponent } from './ex-Pipe.component';

describe('ExPipeComponent', () => {
  let component: ExPipeComponent;
  let fixture: ComponentFixture<ExPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
