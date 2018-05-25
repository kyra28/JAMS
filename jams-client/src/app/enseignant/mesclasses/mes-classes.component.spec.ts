import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesClassesComponent } from './mes-classes.component';

describe('MesClassesComponent', () => {
  let component: MesClassesComponent;
  let fixture: ComponentFixture<MesClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
