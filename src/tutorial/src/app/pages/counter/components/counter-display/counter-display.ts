import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-display',
  standalone: true,
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
  @Input({ required: true }) value: number = 0;
}
