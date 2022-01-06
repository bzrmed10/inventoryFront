import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBenefitsComponent } from './sales-benefits.component';

describe('SalesBenefitsComponent', () => {
  let component: SalesBenefitsComponent;
  let fixture: ComponentFixture<SalesBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
