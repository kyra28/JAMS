import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationqcmComponent } from './creationqcm.component';

describe('CreationqcmComponent', () => {
  let component: CreationqcmComponent;
  let fixture: ComponentFixture<CreationqcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationqcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationqcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
