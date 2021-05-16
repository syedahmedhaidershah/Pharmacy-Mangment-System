import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BillItemComponent } from './bill-item.component';

describe('BillItemComponent', () => {
  let component: BillItemComponent;
  let fixture: ComponentFixture<BillItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
