import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSidebarHeader } from './t-sidebar-header';

describe('TSidebarHeader', () => {
  let component: TSidebarHeader;
  let fixture: ComponentFixture<TSidebarHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSidebarHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(TSidebarHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
