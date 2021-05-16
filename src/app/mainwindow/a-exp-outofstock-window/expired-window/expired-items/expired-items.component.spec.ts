import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpiredItemsComponent } from './expired-items.component';

describe('ExpiredItemsComponent', () => {
  let component: ExpiredItemsComponent;
  let fixture: ComponentFixture<ExpiredItemsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
