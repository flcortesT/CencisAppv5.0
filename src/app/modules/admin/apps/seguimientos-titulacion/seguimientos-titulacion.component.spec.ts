import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosTitulacionComponent } from './seguimientos-titulacion.component';

describe('SeguimientosTitulacionComponent', () => {
  let component: SeguimientosTitulacionComponent;
  let fixture: ComponentFixture<SeguimientosTitulacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosTitulacionComponent]
    });
    fixture = TestBed.createComponent(SeguimientosTitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
