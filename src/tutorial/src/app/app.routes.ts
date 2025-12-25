import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalComponent } from './components/signal/signal';
import { Variables } from './components/variables/variables';
import { NotFound } from './components/not-found/not-found';
import { ControlFlow } from './components/control-flow/control-flow';
import { DynamicCssClass } from './components/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './components/user-master/user-master';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { BatchMaster } from './components/batch-master/batch-master';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'variables',
        pathMatch: 'full',
      },
      {
        path: 'variables',
        component: Variables,
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
        path: 'reactive-users',
        component: ReactiveUser,
      },
      {
        path: 'batch',
        component: BatchMaster,
      },
      {
        path: '**',
        component: NotFound,
      },
    ],
  },
];
