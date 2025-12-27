import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { NsButton } from '../../shared/components/ns-button';
import { authActions } from '../../shared/store/auth-actions';
import { LucideAngularModule, LogOut, User, ShoppingCart } from 'lucide-angular';
// import { cartFeature } from '../../pages/cart/store/cart-feature';

@Component({
  selector: 'ns-header',
  standalone: true,
  imports: [RouterLink, NsButton, LucideAngularModule],
  template: `
    <div
      class="sticky top-0 z-50 w-full px-4 py-3 bg-[#1A1A1B] text-white shadow-lg border-b border-[#4CA6B8]"
    >
      <nav class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="text-xl font-bold tracking-tight text-[#4CA6B8]">NGRX Store</a>

        <div class="flex items-center gap-4">
          <!-- Botão Logout -->
          <button
            nsButton
            variant="ghost"
            type="button"
            (click)="logout()"
            class="text-white hover:bg-white/10"
          >
            <lucide-icon [img]="icons.LogOut" class="size-4 mr-2" />
            Logout
          </button>

          <!-- Botão Perfil -->
          <button
            routerLink="/profile"
            nsButton
            variant="ghost"
            type="button"
            class="text-white hover:bg-white/10"
          >
            <lucide-icon [img]="icons.User" class="size-4 mr-2" />
            Profile
          </button>

          <!-- Botão Carrinho -->
          <button
            nsButton
            variant="ghost"
            type="button"
            class="relative text-white hover:bg-white/10"
            routerLink="/cart"
          >
            <lucide-icon [img]="icons.ShoppingCart" class="size-4" />
            <span
              class="absolute -top-1 -right-1 size-5 flex items-center justify-center bg-[#4CA6B8] text-xs font-medium rounded-full"
            >
              {{ cartItemCount() }}
            </span>
          </button>
        </div>
      </nav>
    </div>
  `,
})
export class NsHeader {
  protected readonly icons = { LogOut, User, ShoppingCart };
  private readonly store = inject(Store);

  protected readonly cartItemCount = toSignal(
    this.store.select((state) => 0),
    { initialValue: 0 }
  );

  protected logout() {
    this.store.dispatch(authActions.logout());
  }
}
