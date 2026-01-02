import { HttpClient } from '@angular/common/http';
import { Injectable, effect, inject } from '@angular/core';
import { forkJoin } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { VehicleService } from '../vehicle.service';
import { Film } from './film';
import { getNestedError } from '../../../core/utils/error-handling';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private http = inject(HttpClient);
  private vehicleService = inject(VehicleService);

  // Recupera dados com rxResource: ideal para dados complexos
  vehicleFilmsResource = rxResource({
    params: this.vehicleService.selectedVehicle,
    stream: (p) => forkJoin(p.params.films.map((link) => this.http.get<Film>(link))),
    defaultValue: [],
  });

  // Acessar o resource gera um erro se a requisição HTTP falhar
  private eff = effect(() => {
    let err = this.vehicleFilmsResource.error();
    if (!err) {
      console.log('Filmes', JSON.stringify(this.vehicleFilmsResource.value()));
    } else {
      console.error('Falha ao carregar filmes', getNestedError(err));
    }
  });
}
