import {
  applyWhen,
  email,
  max,
  min,
  minLength,
  required,
  schema,
  SchemaPath,
  validate,
  validateTree,
} from '@angular/forms/signals';

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
  email(rootPath.email, { message: 'Por favor, insira um endereço de e-mail válido' });
  minLength(rootPath.email, 6, { message: 'O e-mail deve ter pelo menos 6 caracteres' });
  applyWhen(
    rootPath.phone,
    ({ valueOf }) => valueOf(rootPath.sendViaText) === true,
    (phonePath) => {
      required(phonePath, {
        message: 'Seu número de celular é obrigatório para receber nossa newsletter',
      });
      minLength(phonePath, 10, { message: 'É necessário no mínimo 10 dígitos' });
    }
  );

  // Validação entre campos
  validate(rootPath.sendViaText, (ctx) => {
    const viaText = ctx.value();
    const viaEmail = ctx.valueOf(rootPath.sendViaEmail);
    if (viaEmail || viaText) return null;
    return {
      kind: 'sendViaMissing',
      message: 'Deve selecionar enviar via E-mail ou SMS ou ambos',
    };
  });

  min(rootPath.yearsAsFan, 0, { message: 'O número de anos não pode ser negativo' });
  max(rootPath.yearsAsFan, 100, { message: 'Por favor, informe um número válido de anos' });
});

function checkSendVia(viaText: boolean, viaEmail: boolean) {
  if (viaEmail || viaText) return null;
  return {
    kind: 'sendViaMissing',
    message: 'Deve selecionar enviar via E-mail ou SMS ou ambos',
  };
}

// Validação entre campos usando validateTree
// Incluído como referência
// Prefira `validate()` ao invés de `validateTree()` por razões de desempenho
function validateSendVia(basePath: SchemaPath<Subscription>) {
  validateTree(basePath, (ctx) => {
    // Convertido para 'any' para contornar a verificação de propriedade TS no caminho Proxy
    const path = basePath as any;

    const viaEmail = ctx.valueOf(path.sendViaEmail);
    const viaText = ctx.valueOf(path.sendViaText);

    if (viaEmail || viaText) return null;

    return [
      {
        field: path.sendViaEmail,
        kind: 'sendViaMissing',
        message: 'Deve selecionar enviar via E-mail ou SMS ou ambos',
      },
      {
        field: path.sendViaText,
        kind: 'sendViaMissing',
        message: 'Deve selecionar enviar via E-mail ou SMS ou ambos',
      },
    ];
  });
}
