import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/ns-login').then((m) => m.NsLogin),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/ns-register').then((m) => m.NsRegister),
  },
  {
    path: '',
    loadComponent: () => import('./pages/ns-main-layout').then((m) => m.NsMainLayout),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/ns-products').then((m) => m.NsProducts),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/ns-profile').then((m) => m.NsProfile),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/ns-cart').then((m) => m.NsCart),
      },
    ],
  },
];
