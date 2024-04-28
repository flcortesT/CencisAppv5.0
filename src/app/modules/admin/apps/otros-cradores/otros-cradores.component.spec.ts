import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosCradoresComponent } from './otros-cradores.component';

describe('OtrosCradoresComponent', () => {
  let component: OtrosCradoresComponent;
  let fixture: ComponentFixture<OtrosCradoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtrosCradoresComponent]
    });
    fixture = TestBed.createComponent(OtrosCradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
