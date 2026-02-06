import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

// Exemplo 3
interface SummarySettings {
  taxRate: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [CurrencyPipe, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly qty = signal(1);
  protected readonly couponOn = signal(false);
  protected readonly taxRate = signal(0.08);

  // Exemplo 3
  protected readonly settings = signal<SummarySettings>({
    taxRate: 0.08,
  });

  protected readonly price = signal(25);
  protected readonly subtotal = computed(() => this.qty() * this.price());
  protected readonly discounted = computed(() =>
    this.subtotal() * (this.couponOn() ? 0.8 : 1)
  );
  protected readonly total = computed(() =>
    // this.discounted() * (1 + this.taxRate()) Exemplo 3
    this.discounted() * (1 + this.settings().taxRate)
  );

  // Exemplo 1 - Antes
  // protected incrementQty = () => {
  //   this.qty.update(n => n + 1);
  // }

  // protected decrementQty = () => {
  //   this.qty.update(n => (n > 0 ? n - 1 : 0));
  // }

  // protected toggleCoupon = () => {
  //   this.couponOn.update(v => !v);
  // }

  // protected increaseTax = () => {
  //   this.taxRate.update(r => r + 0.01);
  // }
}
