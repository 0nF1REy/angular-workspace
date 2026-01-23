import { signal } from '@angular/core';
import { required, pattern, SchemaPathTree } from '@angular/forms/signals';

// Interface do modelo de dados do endereço
export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

// Fábrica do modelo de endereço
export function createAddressModel() {
  return signal<Address>({
    street: '',
    city: '',
    state: '',
    zip: '',
  });
}

// Construtor do formulário de endereço
export function buildAddressSection(a: SchemaPathTree<Address>) {
  required(a.street, { message: 'Rua é obrigatória' });
  required(a.city, { message: 'Cidade é obrigatória' });
  required(a.state, { message: 'Estado é obrigatório' });
  required(a.zip, { message: 'CEP é obrigatório' });

  pattern(a.zip, /^\d{5}-?\d{3}$/, {
    message: 'O CEP deve estar no formato 12345-678',
  });
}
