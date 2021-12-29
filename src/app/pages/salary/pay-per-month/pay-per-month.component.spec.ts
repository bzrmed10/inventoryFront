import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPerMonthComponent } from './pay-per-month.component';

describe('PayPerMonthComponent', () => {
  let component: PayPerMonthComponent;
  let fixture: ComponentFixture<PayPerMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPerMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPerMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
