import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientosEjecucionactividadescomplementariasComponent } from './seguimientos-ejecucionactividadescomplementarias.component';

describe('SeguimientosEjecucionactividadescomplementariasComponent', () => {
  let component: SeguimientosEjecucionactividadescomplementariasComponent;
  let fixture: ComponentFixture<SeguimientosEjecucionactividadescomplementariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientosEjecucionactividadescomplementariasComponent]
    });
    fixture = TestBed.createComponent(SeguimientosEjecucionactividadescomplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
