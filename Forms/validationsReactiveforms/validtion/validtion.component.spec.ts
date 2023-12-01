import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidtionComponent } from './validtion.component';

describe('ValidtionComponent', () => {
  let component: ValidtionComponent;
  let fixture: ComponentFixture<ValidtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidtionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
