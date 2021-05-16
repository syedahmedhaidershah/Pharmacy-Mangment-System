import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupplierInventoryItemsComponent } from './supplier-inventory-items.component';

describe('SupplierInventoryItemsComponent', () => {
  let component: SupplierInventoryItemsComponent;
  let fixture: ComponentFixture<SupplierInventoryItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInventoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
