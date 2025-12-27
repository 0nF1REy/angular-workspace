import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Facebook, Twitter, Instagram } from 'lucide-angular';

@Component({
  selector: 'ns-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="bg-[#1A1A1B] border-t border-[#4CA6B8] text-[#F3F4F6] py-12">
      <div class="container mx-auto px-4">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- About Section -->
          <div>
            <h3 class="text-lg font-bold text-[#4CA6B8] mb-4">NGRX Store</h3>
            <p class="text-sm text-[#B4B4B6] leading-relaxed">
              Uma plataforma moderna de e-commerce com gerenciamento de estado avançado usando NgRx.
            </p>
          </div>

          <!-- Products Links -->
          <div>
            <h4 class="text-sm font-semibold text-[#F3F4F6] mb-4 uppercase tracking-wide">
              Produtos
            </h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  routerLink="/products"
                  class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors"
                >
                  Todos os Produtos
                </a>
              </li>
              <li>
                <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          <!-- Customer Links -->
          <div>
            <h4 class="text-sm font-semibold text-[#F3F4F6] mb-4 uppercase tracking-wide">
              Cliente
            </h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  routerLink="/profile"
                  class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors"
                >
                  Meu Perfil
                </a>
              </li>
              <li>
                <a routerLink="/cart" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Meu Carrinho
                </a>
              </li>
              <li>
                <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Minhas Compras
                </a>
              </li>
            </ul>
          </div>

          <!-- Support Links -->
          <div>
            <h4 class="text-sm font-semibold text-[#F3F4F6] mb-4 uppercase tracking-wide">
              Suporte
            </h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Centro de Ajuda
                </a>
              </li>
              <li>
                <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Fale Conosco
                </a>
              </li>
              <li>
                <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
                  Termos de Serviço
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Section -->
        <div
          class="border-t border-[#4CA6B8]/20 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p class="text-xs text-[#B4B4B6] text-center md:text-left">
            &copy; 2025 NGRX Store. Todos os direitos reservados.
          </p>

          <!-- Social Links -->
          <div class="flex gap-6 mt-6 md:mt-0">
            <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
              <lucide-icon [img]="icons.Facebook" class="size-5" />
            </a>
            <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
              <lucide-icon [img]="icons.Twitter" class="size-5" />
            </a>
            <a href="#" class="text-[#B4B4B6] hover:text-[#4CA6B8] transition-colors">
              <lucide-icon [img]="icons.Instagram" class="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class NsFooter {
  protected readonly icons = { Facebook, Twitter, Instagram };
}
