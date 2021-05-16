import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddPhamacyUserComponent } from './add-phamacy-user.component';

describe('AddPhamacyUserComponent', () => {
  let component: AddPhamacyUserComponent;
  let fixture: ComponentFixture<AddPhamacyUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhamacyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhamacyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
