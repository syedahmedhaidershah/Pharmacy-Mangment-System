import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AExpOutofstockWindowComponent } from './a-exp-outofstock-window.component';

describe('AExpOutofstockWindowComponent', () => {
  let component: AExpOutofstockWindowComponent;
  let fixture: ComponentFixture<AExpOutofstockWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AExpOutofstockWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AExpOutofstockWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
