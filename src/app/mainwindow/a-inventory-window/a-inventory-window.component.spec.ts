import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AInventoryWindowComponent } from './a-inventory-window.component';

describe('AInventoryWindowComponent', () => {
  let component: AInventoryWindowComponent;
  let fixture: ComponentFixture<AInventoryWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AInventoryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AInventoryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
