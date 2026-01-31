import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleFooter } from './lifecycle-footer';

describe('LifecycleFooter', () => {
  let component: LifecycleFooter;
  let fixture: ComponentFixture<LifecycleFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
