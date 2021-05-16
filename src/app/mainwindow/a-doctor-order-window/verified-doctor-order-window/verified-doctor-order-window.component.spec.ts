import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerifiedDoctorOrderWindowComponent } from './verified-doctor-order-window.component';

describe('VerifiedDoctorOrderWindowComponent', () => {
  let component: VerifiedDoctorOrderWindowComponent;
  let fixture: ComponentFixture<VerifiedDoctorOrderWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedDoctorOrderWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedDoctorOrderWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
