import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ASuppliersWindowComponent } from './a-suppliers-window.component';

describe('ASuppliersWindowComponent', () => {
  let component: ASuppliersWindowComponent;
  let fixture: ComponentFixture<ASuppliersWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ASuppliersWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASuppliersWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
