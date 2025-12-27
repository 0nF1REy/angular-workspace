import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../core/components/header';
import { Footer } from '../core/components/footer';

@Component({
  selector: 'main-layout',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <header></header>
    <router-outlet />
    <footer></footer>
  `,
})
export class MainLayout {
  constructor() {}
}
