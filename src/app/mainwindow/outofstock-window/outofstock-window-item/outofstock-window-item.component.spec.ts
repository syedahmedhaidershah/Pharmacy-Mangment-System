import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OutofstockWindowItemComponent } from './outofstock-window-item.component';

describe('OutofstockWindowItemComponent', () => {
  let component: OutofstockWindowItemComponent;
  let fixture: ComponentFixture<OutofstockWindowItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OutofstockWindowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofstockWindowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
