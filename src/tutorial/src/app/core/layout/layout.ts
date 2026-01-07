import { Component, signal, ViewChild, ElementRef, afterNextRender, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

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
  // 1. Iniciamos como false para o footer começar escondido
  isAtBottom = signal(false);

  // 2. Pegamos a referência da tag <main>
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLElement>;

  constructor() {
    // 3. Verifica o scroll assim que a página renderiza pela primeira vez
    afterNextRender(() => {
      this.checkScroll();
    });

    // 4. (Opcional) Verifica toda vez que você mudar de página/rota
    inject(Router)
      .events.pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Pequeno timeout para dar tempo do router-outlet renderizar o conteúdo novo
        setTimeout(() => this.checkScroll(), 100);
      });
  }

  onScroll(event: Event): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    if (!this.scrollContainer) return;

    const element = this.scrollContainer.nativeElement;

    // Lógica: Se o conteúdo for menor que a tela, mostra o footer.
    // Se for maior, mostra apenas se o scroll chegar no fim.
    const hasScroll = element.scrollHeight > element.clientHeight;
    const isBottom = element.scrollHeight - element.scrollTop <= element.clientHeight + 20;

    if (!hasScroll) {
      this.isAtBottom.set(true); // Conteúdo pequeno, mostra footer
    } else {
      this.isAtBottom.set(isBottom); // Conteúdo grande, segue o scroll
    }
  }
}
