import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoAplicacionrealizadaComponent } from './seguimiento-aplicacionrealizada.component';

describe('SeguimientoAplicacionrealizadaComponent', () => {
  let component: SeguimientoAplicacionrealizadaComponent;
  let fixture: ComponentFixture<SeguimientoAplicacionrealizadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientoAplicacionrealizadaComponent]
    });
    fixture = TestBed.createComponent(SeguimientoAplicacionrealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
