import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesdetailsItemsComponent } from './salesdetails-items.component';

describe('SalesdetailsItemsComponent', () => {
  let component: SalesdetailsItemsComponent;
  let fixture: ComponentFixture<SalesdetailsItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesdetailsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdetailsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
