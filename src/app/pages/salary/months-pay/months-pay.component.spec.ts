import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsPayComponent } from './months-pay.component';

describe('MonthsPayComponent', () => {
  let component: MonthsPayComponent;
  let fixture: ComponentFixture<MonthsPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthsPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
