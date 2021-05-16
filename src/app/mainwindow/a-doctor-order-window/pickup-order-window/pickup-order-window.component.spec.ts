import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PickupOrderWindowComponent } from './pickup-order-window.component';

describe('PickupOrderWindowComponent', () => {
  let component: PickupOrderWindowComponent;
  let fixture: ComponentFixture<PickupOrderWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupOrderWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupOrderWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
