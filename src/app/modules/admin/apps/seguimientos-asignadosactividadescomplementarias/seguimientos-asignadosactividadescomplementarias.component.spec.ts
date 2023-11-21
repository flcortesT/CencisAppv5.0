import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosAsignadosactividadescomplementariasComponent } from './seguimientos-asignadosactividadescomplementarias.component';

describe('SeguimientosAsignadosactividadescomplementariasComponent', () => {
  let component: SeguimientosAsignadosactividadescomplementariasComponent;
  let fixture: ComponentFixture<SeguimientosAsignadosactividadescomplementariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosAsignadosactividadescomplementariasComponent]
    });
    fixture = TestBed.createComponent(SeguimientosAsignadosactividadescomplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
