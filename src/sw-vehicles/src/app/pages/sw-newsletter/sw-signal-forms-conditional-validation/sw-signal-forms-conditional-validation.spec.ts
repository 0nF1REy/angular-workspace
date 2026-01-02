import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSignalFormsConditionalValidation } from './sw-signal-forms-conditional-validation';

describe('SwSignalFormsConditionalValidation', () => {
  let component: SwSignalFormsConditionalValidation;
  let fixture: ComponentFixture<SwSignalFormsConditionalValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwSignalFormsConditionalValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwSignalFormsConditionalValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
