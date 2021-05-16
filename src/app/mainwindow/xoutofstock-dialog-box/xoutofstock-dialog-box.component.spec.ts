import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { XOutofstockDialogBoxComponent } from './xoutofstock-dialog-box.component';

describe('XOutofstockDialogBoxComponent', () => {
  let component: XOutofstockDialogBoxComponent;
  let fixture: ComponentFixture<XOutofstockDialogBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ XOutofstockDialogBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XOutofstockDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
