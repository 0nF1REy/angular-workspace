import { Component } from '@angular/core';
import { SIDEBAR_MENU } from './models/t-sidebar.data';
import { TSidebarItem } from './models/t-sidebar.model';
import { TSidebarContent } from './components/t-sidebar-content/t-sidebar-content';

@Component({
  selector: 't-sidebar',
  imports: [TSidebarContent],
  templateUrl: './t-sidebar.html',
  styleUrl: './t-sidebar.css',
})
export class TSidebar {
  menu: TSidebarItem[] = SIDEBAR_MENU;
}
