import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatewalletComponent } from './wallet.component';

describe('CreatewalletComponent', () => {
  let component: CreatewalletComponent;
  let fixture: ComponentFixture<CreatewalletComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatewalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
