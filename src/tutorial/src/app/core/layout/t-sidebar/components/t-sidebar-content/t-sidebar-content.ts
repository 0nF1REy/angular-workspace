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
  @Input({ required: true }) menu: TSidebarItem[] = [];

  isScrolled = false;

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    this.isScrolled = element.scrollTop > 0;
  }
}
