import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosProntaaplicacionComponent } from './seguimientos-prontaaplicacion.component';

describe('SeguimientosProntaaplicacionComponent', () => {
  let component: SeguimientosProntaaplicacionComponent;
  let fixture: ComponentFixture<SeguimientosProntaaplicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosProntaaplicacionComponent]
    });
    fixture = TestBed.createComponent(SeguimientosProntaaplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
