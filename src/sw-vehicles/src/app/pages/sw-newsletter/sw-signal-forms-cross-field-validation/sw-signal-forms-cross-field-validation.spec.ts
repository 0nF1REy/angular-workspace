import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSignalFormsCrossFieldValidation } from './sw-signal-forms-cross-field-validation';

describe('SwSignalFormsCrossFieldValidation', () => {
  let component: SwSignalFormsCrossFieldValidation;
  let fixture: ComponentFixture<SwSignalFormsCrossFieldValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwSignalFormsCrossFieldValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwSignalFormsCrossFieldValidation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
