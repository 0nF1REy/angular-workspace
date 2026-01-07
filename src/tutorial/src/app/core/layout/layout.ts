import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TSidebar } from './components/t-sidebar/t-sidebar';
import { THeader } from './components/t-header/t-header';
import { TFooter } from './components/t-footer/t-footer';

@Component({
  selector: 't-layout',
  standalone: true,
  imports: [RouterOutlet, TSidebar, THeader, TFooter],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isAtBottom = signal(true);

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    const atBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 20;
    this.isAtBottom.set(atBottom);
  }
}
