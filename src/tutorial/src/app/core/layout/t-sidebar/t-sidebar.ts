import { Component } from '@angular/core';
import { SIDEBAR_MENU } from './models/t-sidebar.data';
import { TSidebarItem } from './models/t-sidebar.model';
import { TSidebarHeader } from './components/t-sidebar-header/t-sidebar-header';
import { TSidebarContent } from './components/t-sidebar-content/t-sidebar-content';
import { TSidebarFooter } from './components/t-sidebar-footer/t-sidebar-footer';

@Component({
  selector: 't-sidebar',
  imports: [TSidebarHeader, TSidebarContent, TSidebarFooter],
  templateUrl: './t-sidebar.html',
  styleUrl: './t-sidebar.css',
})
export class TSidebar {
  menu: TSidebarItem[] = SIDEBAR_MENU;
}
