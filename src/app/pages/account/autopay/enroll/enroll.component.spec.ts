import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnrollAPComponent } from './enroll.component';

describe('EnrollAPComponent', () => {
  let component: EnrollAPComponent;
  let fixture: ComponentFixture<EnrollAPComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
