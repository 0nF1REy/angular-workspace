import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCustomer } from './open-customer';

describe('OpenCustomer', () => {
  let component: OpenCustomer;
  let fixture: ComponentFixture<OpenCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
