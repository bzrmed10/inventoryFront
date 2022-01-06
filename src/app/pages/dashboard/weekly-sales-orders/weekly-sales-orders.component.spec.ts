import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySalesOrdersComponent } from './weekly-sales-orders.component';

describe('WeeklySalesOrdersComponent', () => {
  let component: WeeklySalesOrdersComponent;
  let fixture: ComponentFixture<WeeklySalesOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySalesOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySalesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
