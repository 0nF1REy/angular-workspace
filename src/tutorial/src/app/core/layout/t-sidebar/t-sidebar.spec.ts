import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSidebar } from './t-sidebar';

describe('TSidebar', () => {
  let component: TSidebar;
  let fixture: ComponentFixture<TSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
