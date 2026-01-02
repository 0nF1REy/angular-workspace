import { Component, effect, signal } from '@angular/core';
import { initialData, Subscription, subscriptionSchema } from '../subscription';
import { Field, form } from '@angular/forms/signals';

@Component({
  selector: 'sw-signal-forms-conditional-validation',
  imports: [Field],
  templateUrl: './sw-signal-forms-conditional-validation.html',
  styleUrl: './sw-signal-forms-conditional-validation.css',
})
export class SwSignalFormsConditionalValidation {
  // Cria um signal de modelo de formulário com os campos do formulário
  // Isso representa a estrutura de dados do formulário
  subscribeModel = signal<Subscription>(initialData);

  // Declara um formulário a partir do modelo e do esquema de regras de validação
  subscribeForm = form(this.subscribeModel, subscriptionSchema);

  cancel() {
    // Reseta o formulário (ou navega para outra página)
    this.subscribeForm().reset(initialData);
  }

  // Effect que reage às mudanças e exibe o e-mail no console
  eff = effect(() => console.log('Email:', this.subscribeModel().email));
}
