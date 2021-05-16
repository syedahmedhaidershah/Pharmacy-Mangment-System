import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpiredWindowComponent } from './expired-window.component';

describe('ExpiredWindowComponent', () => {
  let component: ExpiredWindowComponent;
  let fixture: ComponentFixture<ExpiredWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
