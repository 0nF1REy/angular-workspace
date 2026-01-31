import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sw-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sw-layout.html',
  styleUrl: './sw-layout.css',
})
export class SwLayout {
  pageTitle = 'Venda de Veículos - Star Wars';
}
