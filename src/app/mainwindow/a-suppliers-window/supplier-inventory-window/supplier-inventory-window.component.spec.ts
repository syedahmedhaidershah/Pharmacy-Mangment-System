import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SupplierInventoryWindowComponent } from './supplier-inventory-window.component';

describe('SupplierInventoryWindowComponent', () => {
  let component: SupplierInventoryWindowComponent;
  let fixture: ComponentFixture<SupplierInventoryWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInventoryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInventoryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
