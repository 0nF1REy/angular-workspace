import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TState } from '../../../../../store';

@Component({
  selector: 't-sidebar-header',
  standalone: true,
  imports: [],
  templateUrl: './t-sidebar-header.html',
  styleUrl: './t-sidebar-header.css',
})
export class TSidebarHeader {
  private store = inject(Store<TState>);

  readonly counter = this.store.selectSignal((state) => state.count);
}
