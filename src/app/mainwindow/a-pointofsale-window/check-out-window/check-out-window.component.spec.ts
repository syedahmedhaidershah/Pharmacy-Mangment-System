import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckOutWindowComponent } from './check-out-window.component';

describe('CheckOutWindowComponent', () => {
  let component: CheckOutWindowComponent;
  let fixture: ComponentFixture<CheckOutWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
