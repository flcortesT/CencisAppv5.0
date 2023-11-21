import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesNocontactadosComponent } from './pacientes-nocontactados.component';

describe('PacientesNocontactadosComponent', () => {
  let component: PacientesNocontactadosComponent;
  let fixture: ComponentFixture<PacientesNocontactadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientesNocontactadosComponent]
    });
    fixture = TestBed.createComponent(PacientesNocontactadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
