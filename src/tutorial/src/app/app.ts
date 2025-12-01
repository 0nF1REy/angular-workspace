import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  selector: 'root',
  imports: [RouterOutlet, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tutorial');
}
