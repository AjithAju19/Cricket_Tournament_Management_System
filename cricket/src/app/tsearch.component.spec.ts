import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsearchComponent } from './tsearch.component';

describe('TsearchComponent', () => {
  let component: TsearchComponent;
  let fixture: ComponentFixture<TsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
