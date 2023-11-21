import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosRetiradosComponent } from './seguimientos-retirados.component';

describe('SeguimientosRetiradosComponent', () => {
  let component: SeguimientosRetiradosComponent;
  let fixture: ComponentFixture<SeguimientosRetiradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosRetiradosComponent]
    });
    fixture = TestBed.createComponent(SeguimientosRetiradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
