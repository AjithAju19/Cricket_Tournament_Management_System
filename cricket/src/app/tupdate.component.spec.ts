import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupdateComponent } from './tupdate.component';

describe('TupdateComponent', () => {
  let component: TupdateComponent;
  let fixture: ComponentFixture<TupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
