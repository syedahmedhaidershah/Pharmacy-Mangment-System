import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { APointofsaleWindowComponent } from './a-pointofsale-window.component';

describe('APointofsaleWindowComponent', () => {
  let component: APointofsaleWindowComponent;
  let fixture: ComponentFixture<APointofsaleWindowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ APointofsaleWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APointofsaleWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
