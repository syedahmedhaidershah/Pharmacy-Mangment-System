import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutofstockItemsComponent } from './outofstock-items.component';

describe('OutofstockItemsComponent', () => {
  let component: OutofstockItemsComponent;
  let fixture: ComponentFixture<OutofstockItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutofstockItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofstockItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
