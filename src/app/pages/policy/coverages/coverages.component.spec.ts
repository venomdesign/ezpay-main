import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoveragesComponent } from './coverages.component';

describe('CoveragesComponent', () => {
  let component: CoveragesComponent;
  let fixture: ComponentFixture<CoveragesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
