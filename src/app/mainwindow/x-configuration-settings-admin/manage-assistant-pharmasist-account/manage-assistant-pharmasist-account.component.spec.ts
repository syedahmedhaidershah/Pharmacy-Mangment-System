import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManageAssistantPharmasistAccountComponent } from './manage-assistant-pharmasist-account.component';

describe('ManageAssistantPharmasistAccountComponent', () => {
  let component: ManageAssistantPharmasistAccountComponent;
  let fixture: ComponentFixture<ManageAssistantPharmasistAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAssistantPharmasistAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssistantPharmasistAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
