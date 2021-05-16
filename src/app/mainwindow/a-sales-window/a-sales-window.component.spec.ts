import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ASalesWindowComponent } from './a-sales-window.component';

describe('ASalesWindowComponent', () => {
  let component: ASalesWindowComponent;
  let fixture: ComponentFixture<ASalesWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ASalesWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ASalesWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
