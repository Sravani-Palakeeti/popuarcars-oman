import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamicBankingComponent } from './islamic-banking.component';

describe('IslamicBankingComponent', () => {
  let component: IslamicBankingComponent;
  let fixture: ComponentFixture<IslamicBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslamicBankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslamicBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
