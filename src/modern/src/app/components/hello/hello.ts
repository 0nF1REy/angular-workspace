import { Component } from '@angular/core';

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
}
