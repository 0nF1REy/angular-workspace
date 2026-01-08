import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { guestGuard } from './core/guards/guest-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Login',
    canActivate: [guestGuard],
    loadComponent: () => import('./pages/auth/login/login').then((m) => m.Login),
  },
  {
    path: '',
    loadComponent: () => import('./core/layout/layout').then((m) => m.Layout),
    canActivate: [authGuard],
    children: [
      {
        path: 'variables',
        title: 'Variável',
        loadComponent: () => import('./pages/variables/variables').then((m) => m.Variables),
      },
      {
        path: 'databinding',
        title: 'Data Binding',
        loadComponent: () => import('./pages/data-binding/data-binding').then((m) => m.DataBinding),
      },
      {
        path: 'signal',
        title: 'Signal',
        loadComponent: () => import('./pages/signal/signal').then((m) => m.SignalComponent),
      },
      {
        path: 'control-flow',
        title: 'Fluxo de Controle',
        loadComponent: () => import('./pages/control-flow/control-flow').then((m) => m.ControlFlow),
      },
      {
        path: 'dynamic-css-class',
        title: 'Estilização Dinâmica',
        loadComponent: () =>
          import('./pages/dynamic-css-class/dynamic-css-class').then((m) => m.DynamicCssClass),
      },
      {
        path: 'users',
        title: 'Formulário',
        loadComponent: () => import('./pages/user-master/user-master').then((m) => m.UserMaster),
      },
      {
        path: 'reactive-users',
        title: 'Formulário Reativo',
        loadComponent: () =>
          import('./pages/reactive-user/reactive-user').then((m) => m.ReactiveUser),
      },
      {
        path: 'batch',
        title: 'Lotes',
        loadComponent: () => import('./pages/batch-master/batch-master').then((m) => m.BatchMaster),
      },
      {
        path: 'competition',
        title: 'Competição',
        loadComponent: () =>
          import('./pages/project-competition/project-competition').then(
            (m) => m.ProjectCompetition
          ),
      },
      {
        path: 'signal-form',
        title: 'Signal Form',
        loadComponent: () =>
          import('./pages/signal-form-ex/signal-form-ex').then((m) => m.SignalFormEx),
      },
      {
        path: 'life-cycle',
        title: 'Ciclo de Vida',
        loadComponent: () =>
          import('./pages/life-cycle-ex/life-cycle-ex').then((m) => m.LifeCycleEx),
      },
      {
        path: 'counter',
        title: 'Gestão de Estado (NgRx)',
        loadComponent: () => import('./pages/counter/counter').then((m) => m.Counter),
      },
      {
        path: 'user-list',
        title: 'Lista de Usuários',
        loadComponent: () => import('./pages/user-list/user-list').then((m) => m.UserList),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
    title: 'Erro 404',
  },
];
