import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHookBox } from './lifecycle-hook-box';

describe('LifecycleHookBox', () => {
  let component: LifecycleHookBox;
  let fixture: ComponentFixture<LifecycleHookBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHookBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleHookBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
