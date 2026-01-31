import { httpResource } from '@angular/common/http';
import { Injectable, effect, signal } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private url = 'api/vehicles';

  // Expõe signals deste serviço
  selectedVehicle = signal<Vehicle | undefined>(undefined);

  // Recupera dados com httpResource: mais simples / mais flexível
  vehiclesResource = httpResource<Vehicle[]>(() => this.url, { defaultValue: [] });

  // Acessar o resource gera um erro se a requisição HTTP falhar
  private eff = effect(() => {
    if (!this.vehiclesResource.error()) {
      console.log('Vehicles', JSON.stringify(this.vehiclesResource.value()));
    } else {
      console.error('Falha ao carregar veículos', this.vehiclesResource.error()?.message);
    }
  });
}
