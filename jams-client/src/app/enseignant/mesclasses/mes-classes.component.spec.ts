import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesclassesComponent } from './mesclasses.component';

describe('MesclassesComponent', () => {
  let component: MesclassesComponent;
  let fixture: ComponentFixture<MesclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
