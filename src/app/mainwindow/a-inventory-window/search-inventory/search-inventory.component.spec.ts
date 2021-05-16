import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchInventoryComponent } from './search-inventory.component';

describe('SearchInventoryComponent', () => {
  let component: SearchInventoryComponent;
  let fixture: ComponentFixture<SearchInventoryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
