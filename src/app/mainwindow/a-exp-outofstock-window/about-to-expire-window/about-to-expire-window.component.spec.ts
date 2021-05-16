import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutToExpireWindowComponent } from './about-to-expire-window.component';

describe('AboutToExpireWindowComponent', () => {
  let component: AboutToExpireWindowComponent;
  let fixture: ComponentFixture<AboutToExpireWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutToExpireWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutToExpireWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
