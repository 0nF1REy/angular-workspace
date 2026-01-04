import { Component } from '@angular/core';
import { SIDEBAR_MENU } from './menu/t-sidebar-menu.data';
import { TSidebarMenuItem } from './menu/t-sidebar-menu';
import { TSidebarContent } from './t-sidebar-content/t-sidebar-content';

@Component({
  selector: 't-sidebar',
  imports: [TSidebarContent],
  templateUrl: './t-sidebar.html',
  styleUrl: './t-sidebar.css',
})
export class TSidebar {
  menu: TSidebarMenuItem[] = SIDEBAR_MENU;
}
