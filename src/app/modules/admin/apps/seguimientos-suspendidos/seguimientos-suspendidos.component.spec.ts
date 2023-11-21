import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosSuspendidosComponent } from './seguimientos-suspendidos.component';

describe('SeguimientosSuspendidosComponent', () => {
  let component: SeguimientosSuspendidosComponent;
  let fixture: ComponentFixture<SeguimientosSuspendidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosSuspendidosComponent]
    });
    fixture = TestBed.createComponent(SeguimientosSuspendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
