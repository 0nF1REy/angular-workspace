import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { DataBinding } from './pages/data-binding/data-binding';
import { SignalComponent } from './pages/signal/signal';
import { Variables } from './pages/variables/variables';
import { NotFound } from './pages/not-found/not-found';
import { ControlFlow } from './pages/control-flow/control-flow';
import { DynamicCssClass } from './pages/dynamic-css-class/dynamic-css-class';
import { UserMaster } from './pages/user-master/user-master';
import { ReactiveUser } from './pages/reactive-user/reactive-user';
import { BatchMaster } from './pages/batch-master/batch-master';
import { ProjectCompetition } from './pages/project-competition/project-competition';

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
        path: 'competition',
        component: ProjectCompetition,
      },
      {
        path: '**',
        component: NotFound,
      },
    ],
  },
];
