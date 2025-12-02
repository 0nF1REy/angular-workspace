import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { Variables } from './components/variables/variables';

export const routes: Routes = [
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'variables',
    component: Variables,
  },
];
