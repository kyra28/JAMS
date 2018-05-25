import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantbilanComponent } from './etudiantbilan.component';

describe('EtudiantbilanComponent', () => {
  let component: EtudiantbilanComponent;
  let fixture: ComponentFixture<EtudiantbilanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantbilanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantbilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
