import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PickupOrderItemComponent } from './pickup-order-item.component';

describe('PickupOrderItemComponent', () => {
  let component: PickupOrderItemComponent;
  let fixture: ComponentFixture<PickupOrderItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupOrderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
