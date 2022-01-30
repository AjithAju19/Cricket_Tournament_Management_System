import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdisplayComponent } from './tdisplay.component';

describe('TdisplayComponent', () => {
  let component: TdisplayComponent;
  let fixture: ComponentFixture<TdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
