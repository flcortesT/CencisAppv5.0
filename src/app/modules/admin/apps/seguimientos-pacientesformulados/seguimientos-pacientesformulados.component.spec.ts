import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosPacientesformuladosComponent } from './seguimientos-pacientesformulados.component';

describe('SeguimientosPacientesformuladosComponent', () => {
  let component: SeguimientosPacientesformuladosComponent;
  let fixture: ComponentFixture<SeguimientosPacientesformuladosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosPacientesformuladosComponent]
    });
    fixture = TestBed.createComponent(SeguimientosPacientesformuladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
