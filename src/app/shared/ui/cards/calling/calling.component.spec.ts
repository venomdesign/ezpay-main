import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CallingComponent } from './calling.component';

describe('CallingComponent', () => {
  let component: CallingComponent;
  let fixture: ComponentFixture<CallingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
