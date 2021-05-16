import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageDoctorAccountComponent } from './manage-doctor-account.component';

describe('ManageDoctorAccountComponent', () => {
  let component: ManageDoctorAccountComponent;
  let fixture: ComponentFixture<ManageDoctorAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDoctorAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDoctorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
