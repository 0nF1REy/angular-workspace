import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureRegister } from './future-register';

describe('FutureRegister', () => {
  let component: FutureRegister;
  let fixture: ComponentFixture<FutureRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
