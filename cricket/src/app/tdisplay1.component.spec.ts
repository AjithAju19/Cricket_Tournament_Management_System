import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdisplay1Component } from './tdisplay1.component';

describe('Tdisplay1Component', () => {
  let component: Tdisplay1Component;
  let fixture: ComponentFixture<Tdisplay1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tdisplay1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tdisplay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
