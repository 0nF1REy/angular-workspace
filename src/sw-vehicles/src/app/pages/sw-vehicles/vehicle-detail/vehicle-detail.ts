import { Component, computed, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { VehicleService } from '../vehicle.service';
import { FilmService } from '../services/film.service';
import { TranslatePipe } from './translate.pipe';

@Component({
  selector: 'sw-vehicle-detail',
  imports: [CommonModule, DecimalPipe, TranslatePipe],
  templateUrl: './vehicle-detail.html',
  styleUrl: './vehicle-detail.css',
})
export class VehicleDetail {
  private vehicleService = inject(VehicleService);
  private filmService = inject(FilmService);

  // Signals usados no template
  vehicle = this.vehicleService.selectedVehicle;
  pageTitle = computed(() => (this.vehicle() ? `Detail for: ${this.vehicle()?.name}` : ''));

  vehicleFilms = this.filmService.vehicleFilmsResource.value;
  error = this.filmService.vehicleFilmsResource.error;
  errorMessage = computed(() => (this.error() ? this.error()?.message : ''));
}
