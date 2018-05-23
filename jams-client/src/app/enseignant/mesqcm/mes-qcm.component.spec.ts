import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesQcmComponent } from './mes-qcm.component';

describe('MesQcmComponent', () => {
  let component: MesQcmComponent;
  let fixture: ComponentFixture<MesQcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesQcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
