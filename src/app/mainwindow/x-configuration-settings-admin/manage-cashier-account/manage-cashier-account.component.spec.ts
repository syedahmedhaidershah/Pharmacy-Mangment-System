import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageCashierAccountComponent } from './manage-cashier-account.component';

describe('ManageCashierAccountComponent', () => {
  let component: ManageCashierAccountComponent;
  let fixture: ComponentFixture<ManageCashierAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCashierAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCashierAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
