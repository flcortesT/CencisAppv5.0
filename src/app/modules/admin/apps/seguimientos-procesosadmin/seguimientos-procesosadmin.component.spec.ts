import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosProcesosadminComponent } from './seguimientos-procesosadmin.component';

describe('SeguimientosProcesosadminComponent', () => {
  let component: SeguimientosProcesosadminComponent;
  let fixture: ComponentFixture<SeguimientosProcesosadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosProcesosadminComponent]
    });
    fixture = TestBed.createComponent(SeguimientosProcesosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
