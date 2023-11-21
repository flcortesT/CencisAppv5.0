import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarreportesComponent } from './exportarreportes.component';

describe('ExportarreportesComponent', () => {
  let component: ExportarreportesComponent;
  let fixture: ComponentFixture<ExportarreportesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportarreportesComponent]
    });
    fixture = TestBed.createComponent(ExportarreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
