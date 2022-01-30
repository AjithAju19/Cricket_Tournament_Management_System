import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tsearch1Component } from './tsearch1.component';

describe('Tsearch1Component', () => {
  let component: Tsearch1Component;
  let fixture: ComponentFixture<Tsearch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tsearch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tsearch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
