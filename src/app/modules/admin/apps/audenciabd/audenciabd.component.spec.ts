import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudenciabdComponent } from './audenciabd.component';

describe('AudenciabdComponent', () => {
  let component: AudenciabdComponent;
  let fixture: ComponentFixture<AudenciabdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudenciabdComponent]
    });
    fixture = TestBed.createComponent(AudenciabdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
