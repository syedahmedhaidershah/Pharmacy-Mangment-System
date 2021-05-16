import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesdetailsWindowComponent } from './salesdetails-window.component';

describe('SalesdetailsWindowComponent', () => {
  let component: SalesdetailsWindowComponent;
  let fixture: ComponentFixture<SalesdetailsWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesdetailsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdetailsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
