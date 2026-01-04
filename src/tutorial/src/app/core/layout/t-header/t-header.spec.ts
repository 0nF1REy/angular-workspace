import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THeader } from './t-header';

describe('THeader', () => {
  let component: THeader;
  let fixture: ComponentFixture<THeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [THeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(THeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
