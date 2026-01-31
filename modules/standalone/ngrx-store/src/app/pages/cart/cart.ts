import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-angular';
import { Button } from '../../shared/components/button';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { cartFeature } from './store/cart-feature';
import { CurrencyPipe } from '@angular/common';
import { cartActions } from './store/cart-actions';

@Component({
  selector: 'ns-cart',
  imports: [LucideAngularModule, RouterLink, Button, CurrencyPipe],
  template: `
    <div class="min-h-screen bg-[#0F1115] text-[#F3F4F6] py-10 px-4">
      <div class="max-w-6xl mx-auto space-y-10">
        <!-- Header -->
        <div
          class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#4CA6B8] bg-[rgba(31,31,32,0.6)] rounded-sm px-6 py-5 shadow-2xl"
        >
          <div>
            <p class="text-sm font-semibold text-[#4CA6B8] uppercase tracking-[0.08em]">Compras</p>
            <h1 class="text-4xl font-bold tracking-tight text-[#F3F4F6]">Seu Carrinho</h1>
            <p class="text-sm text-[#B4B4B6] mt-2">Revise seus itens antes de finalizar.</p>
          </div>
        </div>

        <!-- Loading -->
        @if(loading()) {
        <div
          class="flex items-center justify-center rounded-sm border border-[#4CA6B8] bg-[rgba(31,31,32,0.6)] py-10 shadow-2xl"
        >
          <p class="text-[#B4B4B6]">Carregando carrinho...</p>
        </div>
        } @else if(items()?.length) {
        <div class="grid gap-6 lg:grid-cols-3">
          <!-- Cart Items -->
          <div class="lg:col-span-2 space-y-4">
            @for (item of items(); track item.product.id) {
            <div
              class="rounded-sm shadow-xl bg-[rgba(31,31,32,0.7)] border border-[#4CA6B8]/60 p-4 flex gap-4"
            >
              <img
                [src]="item.product.image"
                [alt]="item.product.title"
                class="size-24 object-contain rounded-sm bg-[#0F1115] p-2"
              />
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-[#F3F4F6] line-clamp-2">
                  {{ item.product.title }}
                </h3>
                <p class="text-sm text-[#B4B4B6] mt-1">{{ item.product.category }}</p>
                <p class="text-lg font-bold text-[#4CA6B8] mt-2">
                  {{ item.product.price | currency }}
                </p>
              </div>
              <div class="flex flex-col items-end justify-between">
                <button
                  type="button"
                  class="p-2 text-[#B4B4B6] hover:text-red-500 transition-colors"
                  (click)="onRemove(item.product.id)"
                >
                  <lucide-icon [img]="icons.Trash2" class="size-5" />
                </button>
                <div
                  class="flex items-center gap-2 bg-[#1A1A1B] rounded-sm p-1 border border-[#4CA6B8]/40"
                >
                  <button
                    type="button"
                    class="p-1 hover:bg-[#2A2A2B] rounded transition-colors text-[#4CA6B8]"
                    (click)="onUpdateQuantity(item.product.id, item.quantity - 1)"
                  >
                    <lucide-icon [img]="icons.Minus" class="size-4" />
                  </button>
                  <span class="w-8 text-center font-medium text-[#F3F4F6]">
                    {{ item.quantity }}
                  </span>
                  <button
                    type="button"
                    class="p-1 hover:bg-[#2A2A2B] rounded transition-colors text-[#4CA6B8]"
                    (click)="onUpdateQuantity(item.product.id, item.quantity + 1)"
                  >
                    <lucide-icon [img]="icons.Plus" class="size-4" />
                  </button>
                </div>
              </div>
            </div>
            }
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div
              class="rounded-sm shadow-xl bg-[rgba(31,31,32,0.7)] border border-[#4CA6B8]/60 p-6 sticky top-24"
            >
              <h2 class="text-lg font-semibold text-[#F3F4F6] mb-4">Resumo do Pedido</h2>
              <div class="space-y-3 text-sm border-b border-[#4CA6B8]/20 pb-4">
                <div class="flex justify-between">
                  <span class="text-[#B4B4B6]">Subtotal ({{ cartCount() }} itens)</span>
                  <span class="font-medium text-[#F3F4F6]">{{ cartTotal() | currency }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-[#B4B4B6]">Frete</span>
                  <span class="font-medium text-green-400">Grátis</span>
                </div>
              </div>
              <div class="flex justify-between text-base pt-4 mb-6">
                <span class="font-semibold text-[#F3F4F6]">Total</span>
                <span class="font-bold text-[#4CA6B8]">{{ cartTotal() | currency }}</span>
              </div>
              <button nsButton variant="primary" class="w-full mb-2">Ir para Checkout</button>
              <button
                nsButton
                variant="ghost"
                class="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10"
                (click)="onClearCart()"
              >
                Limpar Carrinho
              </button>
            </div>
          </div>
        </div>
        } @else {
        <div
          class="flex flex-col items-center justify-center rounded-sm border border-[#4CA6B8] bg-[rgba(31,31,32,0.6)] py-16 shadow-2xl"
        >
          <lucide-icon [img]="icons.ShoppingBag" class="size-16 text-[#4CA6B8]/40 mb-4" />
          <p class="text-xl font-medium text-[#F3F4F6] mb-2">Seu carrinho está vazio</p>
          <p class="text-[#B4B4B6] mb-6">Parece que você ainda não adicionou nada.</p>
          <a nsButton routerLink="/products">Continuar Comprando</a>
        </div>
        }
      </div>
    </div>
  `,
})
export class Cart {
  protected readonly icons = { ShoppingBag, Plus, Minus, Trash2 };
  private readonly store = inject(Store);

  protected readonly loading = toSignal(this.store.select(cartFeature.selectLoading));
  protected readonly items = toSignal(this.store.select(cartFeature.selectItems));
  protected readonly cartTotal = toSignal(this.store.select(cartFeature.selectCartTotal), {
    initialValue: 0,
  });
  protected readonly cartCount = toSignal(this.store.select(cartFeature.selectCartCount), {
    initialValue: 0,
  });

  protected onRemove(productId: number) {
    this.store.dispatch(cartActions.removeFromCart({ productId }));
  }

  protected onUpdateQuantity(productId: number, quantity: number) {
    this.store.dispatch(cartActions.updateQuantity({ productId, quantity }));
  }

  protected onClearCart() {
    this.store.dispatch(cartActions.clearCart());
  }
}
