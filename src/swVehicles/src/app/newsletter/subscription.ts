import { email, max, min, minLength, required, schema } from '@angular/forms/signals';

export interface Subscription {
  email: string;
  firstName: string;
  lastName: string;
  yearsAsFan: number;
}

export const initialData = {
  email: '',
  firstName: '',
  lastName: '',
  yearsAsFan: NaN,
};

// Define a validação como parte do modelo
export const subscriptionSchema = schema<Subscription>((rootPath) => {
  required(rootPath.email, {
    message: 'Seu endereço de e-mail é obrigatório para receber nossa newsletter',
  });
  email(rootPath.email, { message: 'Por favor, insira um endereço de e-mail válido' });
  minLength(rootPath.email, 6, { message: 'O e-mail deve ter pelo menos 6 caracteres' });
  min(rootPath.yearsAsFan, 0, { message: 'Os anos não podem ser negativos' });
  max(rootPath.yearsAsFan, 100, { message: 'Por favor, insira um número válido de anos' });
});
