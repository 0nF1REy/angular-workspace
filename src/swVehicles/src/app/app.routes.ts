import { Routes } from '@angular/router';
import { SwHome } from './pages/sw-home/sw-home';
import { SwLayout } from './core/sw-layout/sw-layout';

export const routes: Routes = [
  {
    path: '',
    component: SwLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: SwHome },
      {
        path: 'vehicles',
        loadComponent: () =>
          import('./pages/sw-vehicles/vehicle-shell/vehicle-shell').then((m) => m.VehicleShell),
      },
      {
        path: 'subscribe',
        loadComponent: () =>
          import('./pages/sw-newsletter/sw-subscribe-form/sw-subscribe-form').then(
            (c) => c.SwSubscribeForm
          ),
      },
      {
        path: '**',
        loadComponent: () => import('./pages/sw-not-found/sw-not-found').then((m) => m.SwNotFound),
      },
    ],
  },
];
