import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailmarketingComponent } from './emailmarketing.component';

describe('EmailmarketingComponent', () => {
  let component: EmailmarketingComponent;
  let fixture: ComponentFixture<EmailmarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailmarketingComponent]
    });
    fixture = TestBed.createComponent(EmailmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
