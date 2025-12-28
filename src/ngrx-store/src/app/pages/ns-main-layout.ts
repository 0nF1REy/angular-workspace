import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { cartActions } from './cart/store/cart-actions';
import { NsFooter } from '../core/components/ns-footer';
import { NsHeader } from '../core/components/ns-header';

@Component({
  selector: 'ns-main-layout',
  imports: [RouterOutlet, NsHeader, NsFooter],
  template: `
    <ns-header />
    <div class="flex-1 container mx-auto">
      <router-outlet />
    </div>
    <ns-footer />
  `,
  host: {
    class: 'min-h-screen flex flex-col bg-[#0F1115]',
  },
})
export class NsMainLayout {
  private readonly store = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(cartActions.load());
  }
}
