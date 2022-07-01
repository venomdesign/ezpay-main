import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GetdocumentsComponent } from './getdocuments.component';

describe('GetdocumentsComponent', () => {
  let component: GetdocumentsComponent;
  let fixture: ComponentFixture<GetdocumentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
