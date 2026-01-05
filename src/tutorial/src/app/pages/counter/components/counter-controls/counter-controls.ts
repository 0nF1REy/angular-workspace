import { Component, output } from '@angular/core';

@Component({
  selector: 'counter-controls',
  standalone: true,
  templateUrl: './counter-controls.html',
  styleUrl: './counter-controls.css',
})
export class CounterControls {
  incremented = output();
  decremented = output();
}
