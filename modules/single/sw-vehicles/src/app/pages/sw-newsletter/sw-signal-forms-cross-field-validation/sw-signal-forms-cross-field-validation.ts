import { Component, effect, signal } from '@angular/core';
import { initialData, Subscription, subscriptionSchema } from '../subscription';
import { Field, form } from '@angular/forms/signals';

@Component({
  selector: 'sw-signal-forms-cross-field-validation',
  imports: [Field],
  templateUrl: './sw-signal-forms-cross-field-validation.html',
  styleUrl: './sw-signal-forms-cross-field-validation.css',
})
export class SwSignalFormsCrossFieldValidation {
  // Cria um signal de modelo de formulário com os campos do formulário
  // Isso representa a estrutura de dados do formulário
  subscribeModel = signal<Subscription>(initialData);

  // Declara um formulário a partir do modelo e do schema de regras/validação
  subscribeForm = form(this.subscribeModel, subscriptionSchema);

  // Efeito reativo: executa sempre que o signal subscribeModel mudar
  eff = effect(() => console.log('Email:', this.subscribeModel().email));
}
