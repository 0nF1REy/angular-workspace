import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./pages/admin/dashboard/dashboard.component').then(
        (page) => page.DashboardComponent
      ),
    title: 'Admin > Dashboard',
  },
  {
    path: 'admin/cadastro-usuarios',
    loadComponent: () =>
      import('./pages/admin/cad-user/cad-user.component').then(
        (page) => page.CadUserComponent
      ),
    title: 'Admin > Cadastro de Usuários',
  },
  {
    path: 'admin/pesquisa-usuarios',
    loadComponent: () =>
      import('./pages/admin/filter-users/filter-users.component').then(
        (page) => page.FilterUsersComponent
      ),
    title: 'Admin > Pesquisa de Usuários',
  },
  {
    path: 'admin/edita-usuarios',
    loadComponent: () =>
      import('./pages/admin/cad-user/cad-user.component').then(
        (page) => page.CadUserComponent
      ),
    title: 'Admin > Edição de Usuários',
  },
];
