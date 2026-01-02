import { Pipe, PipeTransform } from '@angular/core';
import { Film } from '../services/film';

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  transform(film: Film | null | undefined, locale: string = 'pt_BR'): string {
    if (!film) return '';

    return film.translations?.[locale as keyof typeof film.translations] || film.title || '';
  }
}
