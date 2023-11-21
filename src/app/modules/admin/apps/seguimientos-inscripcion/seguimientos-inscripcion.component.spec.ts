import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosInscripcionComponent } from './seguimientos-inscripcion.component';

describe('SeguimientosInscripcionComponent', () => {
  let component: SeguimientosInscripcionComponent;
  let fixture: ComponentFixture<SeguimientosInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosInscripcionComponent]
    });
    fixture = TestBed.createComponent(SeguimientosInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
