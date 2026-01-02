import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';

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
        loadComponent: () => import('./pages/variables/variables').then((m) => m.Variables),
      },

      {
        path: 'databinding',
        loadComponent: () => import('./pages/data-binding/data-binding').then((m) => m.DataBinding),
      },

      {
        path: 'signal',
        loadComponent: () => import('./pages/signal/signal').then((m) => m.SignalComponent),
      },

      {
        path: 'control-flow',
        loadComponent: () => import('./pages/control-flow/control-flow').then((m) => m.ControlFlow),
      },

      {
        path: 'dynamic-css-class',
        loadComponent: () =>
          import('./pages/dynamic-css-class/dynamic-css-class').then((m) => m.DynamicCssClass),
      },

      {
        path: 'users',
        loadComponent: () => import('./pages/user-master/user-master').then((m) => m.UserMaster),
      },

      {
        path: 'reactive-users',
        loadComponent: () =>
          import('./pages/reactive-user/reactive-user').then((m) => m.ReactiveUser),
      },

      {
        path: 'batch',
        loadComponent: () => import('./pages/batch-master/batch-master').then((m) => m.BatchMaster),
      },

      {
        path: 'competition',
        loadComponent: () =>
          import('./pages/project-competition/project-competition').then(
            (m) => m.ProjectCompetition
          ),
      },
      {
        path: 'signal-form',
        loadComponent: () =>
          import('./pages/signal-form-ex/signal-form-ex').then((m) => m.SignalFormEx),
      },
      {
        path: 'life-cycle',
        loadComponent: () =>
          import('./pages/life-cycle-ex/life-cycle-ex').then((m) => m.LifeCycleEx),
      },

      {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
