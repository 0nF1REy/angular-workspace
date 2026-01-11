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

  name = 'Alan Ryan da Silva Domingues';
  age = 21;
  currentDate = signal(new Date());

  updateName() {
    this.name = 'Lorem ipsum';
  }
}
