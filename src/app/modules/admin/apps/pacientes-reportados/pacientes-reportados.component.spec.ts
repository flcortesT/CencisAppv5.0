import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesReportadosComponent } from './pacientes-reportados.component';

describe('PacientesReportadosComponent', () => {
  let component: PacientesReportadosComponent;
  let fixture: ComponentFixture<PacientesReportadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesReportadosComponent]
    });
    fixture = TestBed.createComponent(PacientesReportadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
