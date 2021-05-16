import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PredictionReportItemsComponent } from './prediction-report-items.component';

describe('PredictionReportItemsComponent', () => {
  let component: PredictionReportItemsComponent;
  let fixture: ComponentFixture<PredictionReportItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionReportItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionReportItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
