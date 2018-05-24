import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantqcmComponent } from './etudiantqcm.component';

describe('EtudiantqcmComponent', () => {
  let component: EtudiantqcmComponent;
  let fixture: ComponentFixture<EtudiantqcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantqcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantqcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
