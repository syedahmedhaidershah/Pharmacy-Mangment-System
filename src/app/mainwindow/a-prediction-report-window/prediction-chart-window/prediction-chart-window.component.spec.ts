import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PredictionChartWindowComponent } from './prediction-chart-window.component';

describe('PredictionChartWindowComponent', () => {
  let component: PredictionChartWindowComponent;
  let fixture: ComponentFixture<PredictionChartWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionChartWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionChartWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
