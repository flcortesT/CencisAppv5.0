import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosPacientesinscritosComponent } from './seguimientos-pacientesinscritos.component';

describe('SeguimientosPacientesinscritosComponent', () => {
  let component: SeguimientosPacientesinscritosComponent;
  let fixture: ComponentFixture<SeguimientosPacientesinscritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosPacientesinscritosComponent]
    });
    fixture = TestBed.createComponent(SeguimientosPacientesinscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
