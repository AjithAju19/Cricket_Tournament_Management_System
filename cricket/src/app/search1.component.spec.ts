import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search1Component } from './search1.component';

describe('Search1Component', () => {
  let component: Search1Component;
  let fixture: ComponentFixture<Search1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
