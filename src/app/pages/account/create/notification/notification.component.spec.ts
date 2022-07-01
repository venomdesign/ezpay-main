import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatenotificationComponent } from './notification.component';

describe('CreatenotificationComponent', () => {
  let component: CreatenotificationComponent;
  let fixture: ComponentFixture<CreatenotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
