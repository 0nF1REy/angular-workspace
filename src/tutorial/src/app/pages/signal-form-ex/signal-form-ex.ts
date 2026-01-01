import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, Field, form, required, schema } from '@angular/forms/signals';

@Component({
  selector: 'signal-form-ex',
  imports: [Field, JsonPipe],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {
  loginModel = signal({ email: '', password: '' });

  // Formulário com Signals sem validações
  // loginForm = form(this.loginModel);

  // Formulário com Signals e validações declaradas via schema
  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, {
      message: 'Informe seu e-mail.',
    });

    email(schema.email, {
      message: 'Esse e-mail não parece válido.',
    });

    required(schema.password, {
      message: 'Informe sua senha.',
    });
  });
}
