import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwNotFound } from './sw-not-found';

describe('SwNotFound', () => {
  let component: SwNotFound;
  let fixture: ComponentFixture<SwNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
