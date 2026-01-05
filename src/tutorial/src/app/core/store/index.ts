import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

export interface TState {
  count: number;
}

export const tReducers: ActionReducerMap<TState> = {
  count: counterReducer,
};
