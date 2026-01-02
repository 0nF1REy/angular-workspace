import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found';
import { SwHome } from './pages/sw-home/sw-home';

export const routes: Routes = [
  { path: 'home', component: SwHome },
  {
    path: 'vehicles',
    loadComponent: () =>
      import('./vehicles/vehicle-shell/vehicle-shell').then((c) => c.VehicleShell),
  },
  {
    path: 'subscribe',
    loadComponent: () =>
      import('./newsletter/subscribe-form/subscribe-form').then((c) => c.SubscribeForm),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
