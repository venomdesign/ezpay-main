import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HolderComponent } from './holder.component';

describe('HolderComponent', () => {
  let component: HolderComponent;
  let fixture: ComponentFixture<HolderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
