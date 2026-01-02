import { Film } from './film';

export class FilmData {
  static films: Film[] = [
    { id: 1, title: 'A New Hope', titlePtBr: 'Uma Nova Esperança' },
    { id: 2, title: 'The Empire Strikes Back', titlePtBr: 'O Império Contra-Ataca' },
    { id: 3, title: 'Return of the Jedi', titlePtBr: 'O Retorno de Jedi' },
    { id: 4, title: 'The Phantom Menace', titlePtBr: 'A Ameaça Fantasma' },
    { id: 5, title: 'Attack of the Clones', titlePtBr: 'Ataque dos Clones' },
    { id: 6, title: 'Revenge of the Sith', titlePtBr: 'A Vingança dos Sith' },
    { id: 7, title: 'The Force Awakens', titlePtBr: 'O Despertar da Força' },
  ];
}
