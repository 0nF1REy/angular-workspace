import { Injectable, computed, effect, inject, linkedSignal } from '@angular/core';
import { VehicleService } from '../pages/sw-vehicles/vehicle.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private vehicleService = inject(VehicleService);

  // Gerencia o estado usando signals
  quantity = linkedSignal({
    source: this.vehicleService.selectedVehicle,
    computation: (v) => 1,
  });

  // quantity = signal(1);
  price = computed(() => this.vehicleService.selectedVehicle()?.cost_in_credits ?? 0);

  // Subtotal antes da entrega e dos impostos
  subTotal = computed(() => this.quantity() * this.price());

  // A entrega é gratuita se o valor ultrapassar 100.000 créditos
  deliveryFee = computed(() => (this.subTotal() < 100000 ? 999 : 0));

  // O imposto pode ser baseado no CEP do endereço de entrega
  tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);

  // Preço total
  totalPrice = computed(() => this.subTotal() + this.deliveryFee() + this.tax());

  eff = effect(() => console.log('Qty:', this.quantity()));
}
