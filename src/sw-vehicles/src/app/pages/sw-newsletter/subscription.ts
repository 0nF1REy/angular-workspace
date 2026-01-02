import { applyWhen, email, max, min, minLength, required, schema } from '@angular/forms/signals';

export interface Subscription {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  sendViaText: boolean;
  sendViaEmail: boolean;
  yearsAsFan: number;
}

export const initialData: Subscription = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  sendViaText: true,
  sendViaEmail: true,
  yearsAsFan: NaN,
};

// Define a validação como parte do modelo
export const subscriptionSchema = schema<Subscription>((rootPath) => {
  required(rootPath.email, {
    message: 'Seu endereço de e-mail é obrigatório para receber nossa newsletter',
    when: ({ valueOf }) => valueOf(rootPath.sendViaEmail) === true,
  });

  email(rootPath.email, {
    message: 'Por favor, insira um endereço de e-mail válido',
  });

  minLength(rootPath.email, 6, {
    message: 'O e-mail deve ter pelo menos 6 caracteres',
  });

  applyWhen(
    rootPath.phone,
    ({ valueOf }) => valueOf(rootPath.sendViaText) === true,
    (phonePath) => {
      required(phonePath, {
        message: 'Seu número de celular é obrigatório para receber nossa newsletter',
      });

      minLength(phonePath, 10, {
        message: 'É necessário no mínimo 10 dígitos',
      });
    }
  );

  min(rootPath.yearsAsFan, 0, {
    message: 'O número de anos não pode ser negativo',
  });

  max(rootPath.yearsAsFan, 100, {
    message: 'Por favor, informe um número válido de anos',
  });
});
