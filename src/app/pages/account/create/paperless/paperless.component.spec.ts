import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatepaperlessComponent } from './paperless.component';

describe('CreatepaperlessComponent', () => {
  let component: CreatepaperlessComponent;
  let fixture: ComponentFixture<CreatepaperlessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepaperlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepaperlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
