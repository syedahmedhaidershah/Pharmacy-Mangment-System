import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddInventoryElementsComponent } from './add-inventory-elements.component';

describe('AddInventoryElementsComponent', () => {
  let component: AddInventoryElementsComponent;
  let fixture: ComponentFixture<AddInventoryElementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInventoryElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventoryElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
