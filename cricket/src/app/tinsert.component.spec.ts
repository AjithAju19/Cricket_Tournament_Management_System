import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinsertComponent } from './tinsert.component';

describe('TinsertComponent', () => {
  let component: TinsertComponent;
  let fixture: ComponentFixture<TinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
