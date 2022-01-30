import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeleteComponent } from './tdelete.component';

describe('TdeleteComponent', () => {
  let component: TdeleteComponent;
  let fixture: ComponentFixture<TdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
