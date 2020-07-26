import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploBaseComponent } from './ejemplo-base.component';

describe('EjemploBaseComponent', () => {
  let component: EjemploBaseComponent;
  let fixture: ComponentFixture<EjemploBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
