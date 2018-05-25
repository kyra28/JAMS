import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantsessionComponent } from './enseignantsession.component';

describe('EnseignantsessionComponent', () => {
  let component: EnseignantsessionComponent;
  let fixture: ComponentFixture<EnseignantsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
