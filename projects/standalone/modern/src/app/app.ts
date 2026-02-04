import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './components/hello/hello';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('modern');
}
