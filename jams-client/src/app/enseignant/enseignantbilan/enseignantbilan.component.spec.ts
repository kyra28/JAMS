import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantbilanComponent } from './enseignantbilan.component';

describe('EnseignantbilanComponent', () => {
  let component: EnseignantbilanComponent;
  let fixture: ComponentFixture<EnseignantbilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnseignantbilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantbilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
