import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutToFinishItemsComponent } from './about-to-finish-items.component';

describe('AboutToFinishItemsComponent', () => {
  let component: AboutToFinishItemsComponent;
  let fixture: ComponentFixture<AboutToFinishItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutToFinishItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutToFinishItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
