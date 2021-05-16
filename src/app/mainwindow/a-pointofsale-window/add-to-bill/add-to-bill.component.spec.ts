import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddToBillComponent } from './add-to-bill.component';

describe('AddToBillComponent', () => {
  let component: AddToBillComponent;
  let fixture: ComponentFixture<AddToBillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
