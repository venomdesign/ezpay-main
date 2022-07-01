import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LocalagentComponent } from './localagent.component';

describe('LocalagentComponent', () => {
  let component: LocalagentComponent;
  let fixture: ComponentFixture<LocalagentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
