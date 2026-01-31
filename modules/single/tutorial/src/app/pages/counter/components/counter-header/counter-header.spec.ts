import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterHeader } from './counter-header';

describe('CounterHeader', () => {
  let component: CounterHeader;
  let fixture: ComponentFixture<CounterHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
