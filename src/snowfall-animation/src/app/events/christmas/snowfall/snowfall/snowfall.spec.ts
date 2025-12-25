import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snowfall } from './snowfall';

describe('Snowfall', () => {
  let component: Snowfall;
  let fixture: ComponentFixture<Snowfall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snowfall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snowfall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
