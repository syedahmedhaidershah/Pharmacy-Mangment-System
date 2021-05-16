import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesReportItemsComponent } from './sales-report-items.component';

describe('SalesReportItemsComponent', () => {
  let component: SalesReportItemsComponent;
  let fixture: ComponentFixture<SalesReportItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReportItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
