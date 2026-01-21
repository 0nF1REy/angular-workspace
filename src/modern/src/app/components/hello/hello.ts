import { Component, signal } from '@angular/core';

@Component({
  selector: 'm-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Bem-vindo ao Angular moderno!';

  protected isDisabled = false;

  onClick(): void {
    this.isDisabled = !this.isDisabled;
    console.log('O botão foi desabilitado!');
  }

  protected count = signal(0);

  increateCounter() {
    this.count.update((value) => value + 1);
  }

  decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  resetCounter() {
    this.count.set(0);
  }
}
