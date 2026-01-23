import { signal } from '@angular/core';
import { SchemaPathTree } from '@angular/forms/signals';

// Interface do modelo de dados de preferências
export interface Preferences {
  marketingOptIn: boolean;
}

// Fábrica do modelo de preferências
export function createPreferencesModel() {
  return signal<Preferences>({
    marketingOptIn: false,
  });
}

// Construtor do formulário de preferências
export function buildPreferencesSection(p: SchemaPathTree<Preferences>) {
  // Não há validações locais para as preferências
}
