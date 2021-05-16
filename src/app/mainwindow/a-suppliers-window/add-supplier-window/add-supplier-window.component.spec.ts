import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddSupplierWindowComponent } from './add-supplier-window.component';

describe('AddSupplierWindowComponent', () => {
  let component: AddSupplierWindowComponent;
  let fixture: ComponentFixture<AddSupplierWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplierWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplierWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
