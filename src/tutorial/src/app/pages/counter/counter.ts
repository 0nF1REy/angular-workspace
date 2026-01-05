import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { TState } from '../../core/store/index';
import { CounterActions } from '../../core/store/counter';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  private store = inject(Store<TState>);

  readonly counterValue = this.store.selectSignal((state) => state.count);

  onDecrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  onIncrement() {
    this.store.dispatch(CounterActions.increment());
  }
}
