import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCardComponent } from './pos-card.component';

describe('PosCardComponent', () => {
  let component: PosCardComponent;
  let fixture: ComponentFixture<PosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
