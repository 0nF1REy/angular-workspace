import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'databinding',
    pathMatch: 'full',
  },
  {
    path: 'databinding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'variables',
    component: Variables,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'dynamic-css-class',
    component: DynamicCssClass,
  },
  {
    path: 'users',
    component: UserMaster,
  },
  {
    path: '**',
    component: NotFound,
  },
];
