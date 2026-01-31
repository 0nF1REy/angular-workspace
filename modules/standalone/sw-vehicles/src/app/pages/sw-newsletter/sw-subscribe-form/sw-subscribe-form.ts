import { Component, computed, effect, signal } from '@angular/core';
import { form, Field, submit } from '@angular/forms/signals';
import { initialData, Subscription, subscriptionSchema } from '../subscription';

@Component({
  selector: 'sw-subscribe-form',
  imports: [Field],
  templateUrl: './sw-subscribe-form.html',
  styleUrl: './sw-subscribe-form.css',
})
export class SwSubscribeForm {
  subscribeMessage = signal('');
  errorMessage = signal('');

  // Cria um signal de modelo de formulário com os campos do formulário
  // Isso representa a estrutura de dados do formulário
  subscribeModel = signal<Subscription>(initialData);
  fullName = computed(() => `${this.subscribeModel().firstName} ${this.subscribeModel().lastName}`);
  pageHeader = computed(() => `Inscreva-se na nossa Newsletter ${this.fullName()}`);

  // Declara um formulário a partir do modelo e do esquema de regras de validação
  subscribeForm = form(this.subscribeModel, subscriptionSchema);

  cancel() {
    // Reseta o formulário (ou navega para outra página)
    this.subscribeForm().reset(initialData);
  }

  subscribe() {
    this.subscribeMessage.set('');
    submit(this.subscribeForm, () => this.onSubmit());
  }

  async onSubmit() {
    this.subscribeMessage.set(`Obrigado pela sua inscrição ${this.fullName()}!`);

    // Envia os dados para o servidor
    console.log('Enviando dados para o servidor:', this.subscribeForm().value());

    // Reseta o formulário (ou navega para outra página)
    this.subscribeForm().reset(initialData);
  }

  eff = effect(() => console.log('E-mail:', this.subscribeModel().email));
}
