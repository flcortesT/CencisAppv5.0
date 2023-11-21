import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultapacientesComponent } from './consultapacientes.component';

describe('ConsultapacientesComponent', () => {
  let component: ConsultapacientesComponent;
  let fixture: ComponentFixture<ConsultapacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultapacientesComponent]
    });
    fixture = TestBed.createComponent(ConsultapacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
