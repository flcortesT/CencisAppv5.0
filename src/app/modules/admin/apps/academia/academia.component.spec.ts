import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaComponent } from './academia.component';

describe('AcademiaComponent', () => {
  let component: AcademiaComponent;
  let fixture: ComponentFixture<AcademiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademiaComponent]
    });
    fixture = TestBed.createComponent(AcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
