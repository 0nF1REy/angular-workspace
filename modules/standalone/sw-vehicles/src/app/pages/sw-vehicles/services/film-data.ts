import { Film } from './film';

export class FilmData {
  static films: Film[] = [
    { id: 1, title: 'A New Hope', translations: { en: 'A New Hope', pt_BR: 'Uma Nova Esperança' } },
    {
      id: 2,
      title: 'The Empire Strikes Back',
      translations: { en: 'The Empire Strikes Back', pt_BR: 'O Império Contra-Ataca' },
    },
    {
      id: 3,
      title: 'Return of the Jedi',
      translations: { en: 'Return of the Jedi', pt_BR: 'O Retorno de Jedi' },
    },
    {
      id: 4,
      title: 'The Phantom Menace',
      translations: { en: 'The Phantom Menace', pt_BR: 'A Ameaça Fantasma' },
    },
    {
      id: 5,
      title: 'Attack of the Clones',
      translations: { en: 'Attack of the Clones', pt_BR: 'Ataque dos Clones' },
    },
    {
      id: 6,
      title: 'Revenge of the Sith',
      translations: { en: 'Revenge of the Sith', pt_BR: 'A Vingança dos Sith' },
    },
    {
      id: 7,
      title: 'The Force Awakens',
      translations: { en: 'The Force Awakens', pt_BR: 'O Despertar da Força' },
    },
  ];
}
