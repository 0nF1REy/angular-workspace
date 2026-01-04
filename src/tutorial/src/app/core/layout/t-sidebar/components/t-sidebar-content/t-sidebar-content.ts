import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TSidebarItem } from '../../models/t-sidebar.model';

@Component({
  selector: 't-sidebar-content',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './t-sidebar-content.html',
  styleUrl: './t-sidebar-content.css',
})
export class TSidebarContent {
  // O @Input permite que o pai envie os dados para cá
  @Input({ required: true }) menu: TSidebarItem[] = [];
}
