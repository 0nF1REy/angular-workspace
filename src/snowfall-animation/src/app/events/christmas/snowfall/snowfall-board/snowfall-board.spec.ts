import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowfallBoard } from './snowfall-board';

describe('SnowfallBoard', () => {
  let component: SnowfallBoard;
  let fixture: ComponentFixture<SnowfallBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnowfallBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowfallBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
