import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutOfStockWindowComponent } from './out-of-stock-window.component';

describe('OutOfStockWindowComponent', () => {
  let component: OutOfStockWindowComponent;
  let fixture: ComponentFixture<OutOfStockWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfStockWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfStockWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
