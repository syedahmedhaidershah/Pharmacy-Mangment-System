import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpiredateWindowItemComponent } from './expiredate-window-item.component';

describe('ExpiredateWindowItemComponent', () => {
  let component: ExpiredateWindowItemComponent;
  let fixture: ComponentFixture<ExpiredateWindowItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredateWindowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredateWindowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
