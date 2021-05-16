import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddDoctorUserComponent } from './add-doctor-user.component';

describe('AddDoctorUserComponent', () => {
  let component: AddDoctorUserComponent;
  let fixture: ComponentFixture<AddDoctorUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
