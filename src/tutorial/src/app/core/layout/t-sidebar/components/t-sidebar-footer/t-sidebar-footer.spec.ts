import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSidebarFooter } from './t-sidebar-footer';

describe('TSidebarFooter', () => {
  let component: TSidebarFooter;
  let fixture: ComponentFixture<TSidebarFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSidebarFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(TSidebarFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
