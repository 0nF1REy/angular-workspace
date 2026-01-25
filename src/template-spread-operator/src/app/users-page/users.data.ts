import { signal } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  status: 'active' | 'invited' | 'disabled';
}

export const pinnedUsers = signal<User[]>([
  { id: 'u1', name: 'Ava Chen', email: 'ava@company.com', role: 'admin', status: 'active' },
]);

export const searchResults = signal<User[]>([
  { id: 'u2', name: 'Noah Patel', email: 'noah@company.com', role: 'user', status: 'active' },
  { id: 'u3', name: 'Mia Rivera', email: 'mia@company.com', role: 'user', status: 'active' },
]);

export const suggestedUsers = signal<User[]>([
  { id: 'u4', name: 'Liam Park', email: 'liam@company.com', role: 'user', status: 'active' },
]);

export const invitedUsers = signal<User[]>([
  { id: 'u5', name: 'Zoe Kim', email: 'zoe@company.com', role: 'user', status: 'invited' },
]);

export function updateUsersData() {
  // Atualiza os usuários fixados (pinned) — adiciona um novo usuário fixado
  pinnedUsers.update((users) => [
    ...users,
    {
      id: `u${Date.now()}`,
      name: `Usuário Fixado ${Math.floor(Math.random() * 1000)}`,
      email: `pinned${Math.floor(Math.random() * 1000)}@company.com`,
      role: 'admin',
      status: 'active',
    },
  ]);

  // Atualiza os resultados de busca — adiciona um novo resultado
  searchResults.update((users) => [
    ...users,
    {
      id: `u${Date.now() + 1}`,
      name: `Resultado de Busca ${Math.floor(Math.random() * 1000)}`,
      email: `search${Math.floor(Math.random() * 1000)}@company.com`,
      role: 'user',
      status: 'active',
    },
  ]);

  // Atualiza os usuários sugeridos — adiciona uma nova sugestão
  suggestedUsers.update((users) => [
    ...users,
    {
      id: `u${Date.now() + 2}`,
      name: `Usuário Sugerido ${Math.floor(Math.random() * 1000)}`,
      email: `suggested${Math.floor(Math.random() * 1000)}@company.com`,
      role: 'user',
      status: 'active',
    },
  ]);

  // Atualiza os usuários convidados — adiciona um novo convite
  invitedUsers.update((users) => [
    ...users,
    {
      id: `u${Date.now() + 3}`,
      name: `Usuário Convidado ${Math.floor(Math.random() * 1000)}`,
      email: `invited${Math.floor(Math.random() * 1000)}@company.com`,
      role: 'user',
      status: 'invited',
    },
  ]);
}
