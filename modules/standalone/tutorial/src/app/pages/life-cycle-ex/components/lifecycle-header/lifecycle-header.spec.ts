import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHeader } from './lifecycle-header';

describe('LifecycleHeader', () => {
  let component: LifecycleHeader;
  let fixture: ComponentFixture<LifecycleHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
