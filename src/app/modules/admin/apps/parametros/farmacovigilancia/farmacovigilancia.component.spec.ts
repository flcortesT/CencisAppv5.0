import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmacovigilanciaComponent } from './farmacovigilancia.component';

describe('FarmacovigilanciaComponent', () => {
  let component: FarmacovigilanciaComponent;
  let fixture: ComponentFixture<FarmacovigilanciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmacovigilanciaComponent]
    });
    fixture = TestBed.createComponent(FarmacovigilanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
