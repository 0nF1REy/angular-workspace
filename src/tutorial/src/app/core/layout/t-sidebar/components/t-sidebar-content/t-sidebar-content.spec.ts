import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSidebarContent } from './t-sidebar-content';

describe('TSidebarContent', () => {
  let component: TSidebarContent;
  let fixture: ComponentFixture<TSidebarContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TSidebarContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TSidebarContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
