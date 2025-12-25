import { Component, signal } from '@angular/core';
import { SnowfallBoard } from './events/christmas/snowfall/snowfall-board/snowfall-board';

@Component({
  selector: 'app-root',
  imports: [SnowfallBoard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Snowfall Animation');
}
