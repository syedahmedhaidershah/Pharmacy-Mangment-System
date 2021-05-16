import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewDoctorOrderWindowComponent } from './new-doctor-order-window.component';

describe('NewDoctorOrderWindowComponent', () => {
  let component: NewDoctorOrderWindowComponent;
  let fixture: ComponentFixture<NewDoctorOrderWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDoctorOrderWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDoctorOrderWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
