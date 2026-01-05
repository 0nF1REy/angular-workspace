import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TState } from '../../core/store';
import { CounterActions } from '../../core/store/counter';

import { CounterHeader } from './components/counter-header/counter-header';
import { CounterDisplay } from './components/counter-display/counter-display';
import { CounterControls } from './components/counter-controls/counter-controls';

@Component({
  selector: 'counter-page',
  standalone: true,
  imports: [CounterHeader, CounterDisplay, CounterControls],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  private store = inject(Store<TState>);
  readonly counterValue = this.store.selectSignal((state) => state.count);

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
