import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosclinicosComponent } from './datosclinicos.component';

describe('DatosclinicosComponent', () => {
  let component: DatosclinicosComponent;
  let fixture: ComponentFixture<DatosclinicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosclinicosComponent]
    });
    fixture = TestBed.createComponent(DatosclinicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
