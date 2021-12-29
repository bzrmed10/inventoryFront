import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeesSalariesComponent } from './emplyees-salaries.component';

describe('EmplyeesSalariesComponent', () => {
  let component: EmplyeesSalariesComponent;
  let fixture: ComponentFixture<EmplyeesSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeesSalariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeesSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
