import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NsFooter } from '../core/components/ns-footer';
import { NsHeader } from '../core/components/ns-header';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, NsFooter, NsHeader],
  template: `
    <ns-header />
    <router-outlet />
    <ns-footer />
  `,
})
export class MainLayout {
  constructor() {}
}
