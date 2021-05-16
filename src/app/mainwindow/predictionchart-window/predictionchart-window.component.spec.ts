import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PredictionchartWindowComponent } from './predictionchart-window.component';

describe('PredictionchartWindowComponent', () => {
  let component: PredictionchartWindowComponent;
  let fixture: ComponentFixture<PredictionchartWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionchartWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionchartWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
