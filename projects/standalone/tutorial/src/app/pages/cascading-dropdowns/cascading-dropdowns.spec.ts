import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingDropdowns } from './cascading-dropdowns';

describe('CascadingDropdowns', () => {
  let component: CascadingDropdowns;
  let fixture: ComponentFixture<CascadingDropdowns>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CascadingDropdowns]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascadingDropdowns);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
