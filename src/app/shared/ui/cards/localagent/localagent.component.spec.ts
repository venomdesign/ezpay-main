import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalagentComponent } from './localagent.component';

describe('LocalagentComponent', () => {
  let component: LocalagentComponent;
  let fixture: ComponentFixture<LocalagentComponent>;

  beforeEach(async(() => {
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
