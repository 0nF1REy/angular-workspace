import { Component, computed, signal } from '@angular/core';

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

  // protected doubleCount = computed(() => this.count() * 2);

  protected doubleCount = computed(() => {
    console.log("'doubleCount' foi chamado!");
    return this.count() * 2;
  });

  getDoubleCount() {
    console.log("'getDoubleCount' foi chamado!");
    return this.count() * 2;
  }

  protected increateCounter() {
    this.count.update((value) => value + 1);
  }

  protected decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
