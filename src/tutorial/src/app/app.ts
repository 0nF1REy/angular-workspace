import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from './components/variables/variables';

@Component({
  selector: 'root',
  imports: [RouterOutlet, Variables],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial');
}
