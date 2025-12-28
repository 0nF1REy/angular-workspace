import { Component, inject, signal } from '@angular/core';
import { NsButton } from '../../shared/components/ns-button';
import { RouterLink } from '@angular/router';
import { form, Field } from '@angular/forms/signals';
import { NsFormErrors } from '../../shared/components/ns-form-errors';
import { registerSchema } from './register-schema';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { authFeatures } from '../../shared/store/auth-features';
import { authActions } from '../../shared/store/auth-actions';

@Component({
  selector: 'ns-register',
  standalone: true,
  imports: [NsButton, RouterLink, Field, NsFormErrors],
  template: `
    <div
      class="w-full max-w-md p-8 bg-[#1A1A1B] rounded-2xl shadow-xl border border-[rgba(76,166,184,0.2)]"
    >
      <h1 class="text-3xl font-bold text-center text-[#F3F4F6] mb-2">Criar Conta</h1>
      <p class="text-sm text-center text-[#4CA6B8] mb-8">
        Cadastre-se para começar a usar nossa plataforma
      </p>

      <form class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-semibold text-[#F3F4F6] mb-2">
            Usuário
          </label>
          <input
            id="username"
            type="text"
            [field]="registerForm.username"
            autocomplete="username"
            class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none transition-shadow"
            placeholder="Digite seu nome de usuário"
          />
          <ns-form-errors [control]="registerForm.username()" />
        </div>

        <div>
          <label for="email" class="block text-sm font-semibold text-[#F3F4F6] mb-2"> Email </label>
          <input
            id="email"
            type="email"
            [field]="registerForm.email"
            autocomplete="email"
            class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none transition-shadow"
            placeholder="Digite seu email"
          />
          <ns-form-errors [control]="registerForm.email()" />
        </div>

        <div>
          <label for="password" class="block text-sm font-semibold text-[#F3F4F6] mb-2">
            Senha
          </label>
          <input
            id="password"
            type="password"
            [field]="registerForm.password"
            autocomplete="new-password"
            class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none transition-shadow"
            placeholder="Digite sua senha"
          />
          <ns-form-errors [control]="registerForm.password()" />
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-semibold text-[#F3F4F6] mb-2">
            Confirmar Senha
          </label>
          <input
            id="confirmPassword"
            type="password"
            [field]="registerForm.confirmPassword"
            autocomplete="new-password"
            class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none transition-shadow"
            placeholder="Confirme sua senha"
          />
          <ns-form-errors [control]="registerForm.confirmPassword()" />
        </div>

        <!-- Lógica de clique igual ao tutorial -->
        <button
          (click)="onSubmit($event)"
          nsButton
          type="submit"
          [disabled]="registerForm().invalid() || isLoading()"
          class="w-full"
        >
          {{ isLoading() ? 'Registrando...' : 'Registrar' }}
        </button>

        <p class="text-sm text-center text-[#F3F4F6] mt-4">
          Já tem uma conta?
          <a routerLink="/login" class="text-[#4CA6B8] font-semibold underline"> Faça login </a>
        </p>
      </form>

      <p class="text-xs text-center mt-8 text-[rgba(243,244,246,0.5)]">
        Ao se registrar, você concorda com nossos Termos de Serviço
      </p>
    </div>
  `,
  host: {
    class: 'min-h-screen flex items-center justify-center bg-[#1A1A1B] p-4',
  },
})
export class NsRegister {
  registerModel = signal({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  registerForm = form(this.registerModel, registerSchema);

  private readonly store = inject(Store);

  protected readonly isLoading = toSignal(this.store.select(authFeatures.selectIsLoading));

  onSubmit(event: Event) {
    event.preventDefault();

    const id = Date.now();
    const { confirmPassword, ...rest } = this.registerForm().value();
    const registerRequest = { id, ...rest };

    this.store.dispatch(authActions.register(registerRequest));
  }
}
