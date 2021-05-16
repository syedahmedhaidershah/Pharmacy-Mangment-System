import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutofstockWindowComponent } from './outofstock-window.component';

describe('OutofstockWindowComponent', () => {
  let component: OutofstockWindowComponent;
  let fixture: ComponentFixture<OutofstockWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutofstockWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofstockWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
