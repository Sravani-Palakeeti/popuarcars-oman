import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCompaniesComponent } from './finance-companies.component';

describe('FinanceCompaniesComponent', () => {
  let component: FinanceCompaniesComponent;
  let fixture: ComponentFixture<FinanceCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
