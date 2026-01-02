import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwLayout } from './sw-layout';

describe('SwLayout', () => {
  let component: SwLayout;
  let fixture: ComponentFixture<SwLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
