import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  // Armazenar dados
  // Criar função para chamada de API (70% implementada)
  // Criar Subject ou BehaviorSubject
  // Funções utilitárias / funções auxiliares

  courseName: string = 'Angular 21 Full Course';

  addTwoNum(num1: number, num2: number) {
    debugger;
    const sum = num1 + num2;
    return sum;
  }
}
