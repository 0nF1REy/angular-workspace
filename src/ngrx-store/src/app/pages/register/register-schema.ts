import { minLength, required, schema, validate } from '@angular/forms/signals';

export type RegisterModel = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerSchema = schema<RegisterModel>((rootPath) => {
  required(rootPath.username, { message: 'O nome de usuário é obrigatório' });
  required(rootPath.email, { message: 'O e-mail é obrigatório' });
  required(rootPath.password, { message: 'A senha é obrigatória' });
  minLength(rootPath.password, 6, {
    message: 'A senha deve ter no mínimo 6 caracteres',
  });
  required(rootPath.confirmPassword, {
    message: 'A confirmação de senha é obrigatória',
  });

  validate(rootPath.confirmPassword, ({ value, valueOf }) => {
    const password = valueOf(rootPath.password);
    const confirmPassword = value();

    if (!password) {
      return null;
    }

    if (password !== confirmPassword) {
      return {
        kind: 'passwordMismatch',
        message: 'As senhas não coincidem',
      };
    }

    return null;
  });
});
