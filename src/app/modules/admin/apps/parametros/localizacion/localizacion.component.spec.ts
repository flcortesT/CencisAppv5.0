import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacionComponent } from './localizacion.component';

describe('LocalizacionComponent', () => {
  let component: LocalizacionComponent;
  let fixture: ComponentFixture<LocalizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalizacionComponent]
    });
    fixture = TestBed.createComponent(LocalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
