import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsForBuyingComponent } from './tips-for-buying.component';

describe('TipsForBuyingComponent', () => {
  let component: TipsForBuyingComponent;
  let fixture: ComponentFixture<TipsForBuyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsForBuyingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipsForBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
