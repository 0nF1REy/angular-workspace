import { signal } from '@angular/core';
import { required, SchemaPathTree } from '@angular/forms/signals';

// Interface do modelo de dados da conta
export interface Account {
  firstName: string;
  lastName: string;
}

// Fábrica do modelo de conta
export function createAccountModel() {
  return signal<Account>({
    firstName: '',
    lastName: '',
  });
}

// Construtor do formulário de conta
export function buildAccountSection(a: SchemaPathTree<Account>) {
  required(a.firstName, { message: 'Nome é obrigatório' });
  required(a.lastName, { message: 'Sobrenome é obrigatório' });
}
