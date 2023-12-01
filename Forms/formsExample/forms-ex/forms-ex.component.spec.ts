import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExComponent } from './forms-ex.component';

describe('FormsExComponent', () => {
  let component: FormsExComponent;
  let fixture: ComponentFixture<FormsExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
