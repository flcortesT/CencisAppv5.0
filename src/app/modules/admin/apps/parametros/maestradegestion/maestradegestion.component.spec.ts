import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestradegestionComponent } from './maestradegestion.component';

describe('MaestradegestionComponent', () => {
  let component: MaestradegestionComponent;
  let fixture: ComponentFixture<MaestradegestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestradegestionComponent]
    });
    fixture = TestBed.createComponent(MaestradegestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
