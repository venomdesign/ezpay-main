import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollAPComponent } from './enroll.component';

describe('EnrollAPComponent', () => {
  let component: EnrollAPComponent;
  let fixture: ComponentFixture<EnrollAPComponent>;

  beforeEach(async(() => {
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
