import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAPComponent } from './manage.component';

describe('ManageAPComponent', () => {
  let component: ManageAPComponent;
  let fixture: ComponentFixture<ManageAPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
