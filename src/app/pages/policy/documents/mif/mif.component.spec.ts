import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MifComponent } from './mif.component';

describe('MifComponent', () => {
  let component: MifComponent;
  let fixture: ComponentFixture<MifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
