import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaperlessComponent } from './paperless.component';

describe('PaperlessComponent', () => {
  let component: PaperlessComponent;
  let fixture: ComponentFixture<PaperlessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
