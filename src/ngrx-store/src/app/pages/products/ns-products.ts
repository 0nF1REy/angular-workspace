import { Component, inject, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { productActions } from './store/product-actions';
import { productFeature } from './store/product-feature';
import { toSignal } from '@angular/core/rxjs-interop';
import { NsProductCard } from '../../core/components/ns-product-card';
import { FormsModule } from '@angular/forms';
import { cartActions } from '../cart/store/cart-actions';
import { Product } from './types/product-type';

@Component({
  selector: 'ns-products',
  imports: [NsProductCard, FormsModule],
  template: `
    <div class="min-h-screen bg-[#0F1115] text-[#F3F4F6] py-10 px-4">
      <div class="max-w-6xl mx-auto space-y-10">
        <div
          class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#4CA6B8] bg-[rgba(31,31,32,0.6)] rounded-sm px-6 py-5 shadow-2xl"
        >
          <div>
            <p class="text-sm font-semibold text-[#4CA6B8] uppercase tracking-[0.08em]">Catálogo</p>
            <h1 class="text-4xl font-bold tracking-tight text-[#F3F4F6]">Produtos</h1>
            <p class="text-sm text-[#B4B4B6] mt-2">Explore nossa seleção e adicione ao carrinho.</p>
          </div>

          <div class="w-full md:w-80 relative">
            <input
              [(ngModel)]="searchQuery"
              (ngModelChange)="onSearch($event)"
              class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.7)] text-[#F3F4F6] placeholder:text-[#B4B4B6] focus:outline-none focus:border-[#7BD7E8]"
              type="text"
              placeholder="Buscar produtos..."
            />
          </div>
        </div>

        @if(loading()) {
        <div
          class="flex items-center justify-center rounded-sm border border-[#4CA6B8] bg-[rgba(31,31,32,0.6)] py-10 shadow-2xl"
        >
          <p class="text-[#B4B4B6]">Carregando produtos...</p>
        </div>
        } @if(products()?.length === 0 && !loading()) {
        <div
          class="flex items-center justify-center rounded-sm border border-[#4CA6B8] bg-[rgba(31,31,32,0.6)] py-10 shadow-2xl"
        >
          <p class="text-[#B4B4B6]">Nenhum produto disponível.</p>
        </div>
        } @else {
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          @for (product of products(); track product.id) {
          <ns-product-card (addToCart)="onAddToCart($event)" [product]="product" />
          }
        </div>
        }
      </div>
    </div>
  `,
})
export class NsProducts implements OnInit {
  private readonly store = inject(Store);
  protected readonly products = toSignal(this.store.select(productFeature.selectFilteredProducts));
  protected readonly loading = toSignal(this.store.select(productFeature.selectLoading));

  protected searchQuery = signal('');

  protected onSearch(query: string): void {
    this.store.dispatch(productActions.search({ searchQuery: query }));
  }

  ngOnInit(): void {
    this.store.dispatch(productActions.load());
  }

  protected onAddToCart(product: Product): void {
    this.store.dispatch(cartActions.addToCart({ product }));
  }
}
