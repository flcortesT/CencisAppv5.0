import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestracategoriasComponent } from './maestracategorias.component';

describe('MaestracategoriasComponent', () => {
  let component: MaestracategoriasComponent;
  let fixture: ComponentFixture<MaestracategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestracategoriasComponent]
    });
    fixture = TestBed.createComponent(MaestracategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
