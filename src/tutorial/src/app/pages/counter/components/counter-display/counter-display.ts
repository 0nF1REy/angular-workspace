import { Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'counter-display',
  standalone: true,
  templateUrl: './counter-display.html',
  styleUrl: './counter-display.css',
})
export class CounterDisplay {
  @Input({ required: true }) set value(val: number) {
    this.updateDirection(val);
    this._value.set(val);
  }

  private _value = signal(0);

  protected displayValue = computed(() => this._value());

  protected animationClass = signal('');

  private lastValue = 0;

  private updateDirection(newValue: number) {
    if (newValue > this.lastValue) {
      this.animationClass.set('bump-up');
    } else if (newValue < this.lastValue) {
      this.animationClass.set('bump-down');
    }

    this.lastValue = newValue;

    setTimeout(() => this.animationClass.set(''), 300);
  }
}
