import { Component, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('tut');

  nameOne = 'Alan Ryan da Silva Domingues';
  nameTwo = signal('Alan Ryan da Silva Domingues');
  age = 21;
  currentDate = signal(new Date());

  updateNameOne() {
    this.nameOne = 'A. R. D. S. D';
  }

  updateNameTwo() {
    // Geração de texto aleatório de 50 a 100 palavras
    const hugeText = this.generateLorem(80);
    this.nameTwo.set(hugeText);
  }

  private generateLorem(wordCount: number): string {
    const words = [
      'lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'sed',
      'do',
      'eiusmod',
      'tempor',
      'incididunt',
      'ut',
      'labore',
      'et',
      'dolore',
      'magna',
      'aliqua',
      'enim',
      'ad',
      'minim',
      'veniam',
      'quis',
      'nostrud',
      'exercitation',
      'ullamco',
      'laboris',
      'nisi',
      'ut',
      'aliquip',
      'ex',
      'ea',
      'commodo',
      'consequat',
      'duis',
      'aute',
      'irure',
      'dolor',
      'in',
      'reprehenderit',
    ];

    let result = '';
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      result += words[randomIndex] + ' ';
    }

    // Capitalização da primeira letra e coloca um ponto final
    return result.trim().charAt(0).toUpperCase() + result.trim().slice(1) + '.';
  }
}
