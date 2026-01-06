import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideAngularModule, Star } from 'lucide-angular';
import { Product } from '../../pages/products/types/product-type';
import { Button } from '../../shared/components/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'ns-product-card',
  imports: [Button, LucideAngularModule, CurrencyPipe],
  template: `
    <div
      class="relative overflow-hidden rounded-sm bg-[rgba(31,31,32,0.7)] border border-[#4CA6B8]"
    >
      <img
        [src]="product().image"
        [alt]="product().title"
        width="300"
        height="300"
        class="w-full h-48 object-contain p-4 bg-[#0F1115]"
      />
      <span
        class="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-[#4CA6B8] text-[#0F1115] rounded"
      >
        {{ product().category }}
      </span>
    </div>

    <div class="p-4 space-y-4 bg-[#1A1A1B]">
      <h3 class="font-semibold text-[#F3F4F6] line-clamp-2 min-h-12">
        {{ product().title }}
      </h3>

      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1 text-amber-400">
          <lucide-icon [img]="icons.Star" class="size-4 fill-current" />
          <span class="text-sm font-medium text-[#F3F4F6]">{{ product().rating.rate }}</span>
        </div>
        <span class="text-xs text-[#B4B4B6]">({{ product().rating.count }} reviews)</span>
      </div>

      <div class="flex items-center justify-between pt-2">
        <span class="text-xl font-bold text-[#4CA6B8]">{{ product().price | currency }}</span>
        <button
          nsButton
          size="sm"
          type="button"
          class="text-sm font-semibold"
          (click)="addToCart.emit(product())"
        >
          Adicionar
        </button>
      </div>
    </div>
  `,
  host: {
    class:
      'block rounded-sm shadow-xl hover:shadow-2xl transition-shadow overflow-hidden border border-[#4CA6B8]/60 bg-[#1A1A1B]',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  readonly icons = { Star };
  readonly product = input.required<Product>();
  readonly addToCart = output<Product>();
}
