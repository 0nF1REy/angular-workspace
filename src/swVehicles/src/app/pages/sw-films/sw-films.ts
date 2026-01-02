import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService } from './film.service';

@Component({
  selector: 'sw-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sw-films.html',
  styleUrl: './sw-films.css',
})
export class SwFilms {
  private filmService = inject(FilmService);

  pageTitle = 'Filmes Star Wars';

  vehicleFilms = this.filmService.vehicleFilmsResource.value;
  error = this.filmService.vehicleFilmsResource.error;
  errorMessage = computed(() => {
    const err = this.error();
    return err ? `Erro ao carregar filmes: ${err.message}` : '';
  });
}
