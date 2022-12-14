import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHouseFinanceComponent } from './in-house-finance.component';

describe('InHouseFinanceComponent', () => {
  let component: InHouseFinanceComponent;
  let fixture: ComponentFixture<InHouseFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InHouseFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InHouseFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
