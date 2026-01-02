import { Routes } from '@angular/router';
import { PageNotFound } from './page-not-found';
import { SwHome } from './pages/sw-home/sw-home';

export const routes: Routes = [
  { path: 'home', component: SwHome },
  {
    path: 'vehicles',
    loadComponent: () =>
      import('./pages/sw-vehicles/vehicle-shell/vehicle-shell').then((c) => c.VehicleShell),
  },
  {
    path: 'subscribe',
    loadComponent: () =>
      import('./pages/sw-newsletter/sw-subscribe-form/sw-subscribe-form').then(
        (c) => c.SwSubscribeForm
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
