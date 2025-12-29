import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SIDEBAR_MENU } from './menu/t-sidebar-menu.data';
import { TSidebarMenuItem } from './menu/t-sidebar-menu';

@Component({
  selector: 't-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './t-sidebar.html',
  styleUrl: './t-sidebar.css',
})
export class TSidebar {
  menu: TSidebarMenuItem[] = SIDEBAR_MENU;
}
