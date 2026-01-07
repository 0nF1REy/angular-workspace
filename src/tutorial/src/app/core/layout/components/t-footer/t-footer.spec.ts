import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFooter } from './t-footer';

describe('TFooter', () => {
  let component: TFooter;
  let fixture: ComponentFixture<TFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
