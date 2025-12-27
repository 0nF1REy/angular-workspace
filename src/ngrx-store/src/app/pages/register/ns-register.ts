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
  imports: [NsButton, RouterLink, Field, NsFormErrors],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 bg-[#1A1A1B]">
      <div class="w-full max-w-md">
        <div class="rounded-sm p-8 shadow-2xl bg-[#1A1A1B]">
          <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold tracking-tight mb-2 text-[#F3F4F6]">Criar Conta</h1>
            <p class="text-sm text-[#4CA6B8]">Cadastre-se para começar a usar nossa plataforma</p>
          </div>

          <form (ngSubmit)="onSubmit($event)" class="space-y-6">
            <!-- Username -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-[#F3F4F6]">Usuário</label>
              <input
                type="text"
                [field]="registerForm.username"
                autocomplete="username"
                placeholder="Digite seu nome de usuário"
                class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8]
                       bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <ns-form-errors [control]="registerForm.username()" />
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-[#F3F4F6]">Email</label>
              <input
                type="email"
                [field]="registerForm.email"
                autocomplete="email"
                placeholder="Digite seu email"
                class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8]
                       bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <ns-form-errors [control]="registerForm.email()" />
            </div>

            <!-- Password -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-[#F3F4F6]">Senha</label>
              <input
                type="password"
                [field]="registerForm.password"
                autocomplete="new-password"
                placeholder="Digite sua senha"
                class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8]
                       bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <ns-form-errors [control]="registerForm.password()" />
            </div>

            <!-- Confirm Password -->
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-[#F3F4F6]"> Confirmar Senha </label>
              <input
                type="password"
                [field]="registerForm.confirmPassword"
                autocomplete="new-password"
                placeholder="Confirme sua senha"
                class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8]
                       bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <ns-form-errors [control]="registerForm.confirmPassword()" />
            </div>

            <!-- Submit -->
            <button
              nsButton
              variant="primary"
              size="md"
              type="submit"
              class="w-full"
              [disabled]="registerForm().invalid() || isLoading()"
            >
              {{ isLoading() ? 'Registrando...' : 'Registrar' }}
            </button>

            <p class="text-center text-sm text-[#F3F4F6]">
              Já tem uma conta?
              <a routerLink="/login" class="text-[#4CA6B8] font-semibold"> Faça login </a>
            </p>
          </form>

          <p class="text-xs text-center mt-8 text-[rgba(243,244,246,0.5)]">
            Ao se registrar, você concorda com nossos Termos de Serviço
          </p>
        </div>
      </div>
    </div>
  `,
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

    if (this.registerForm().invalid()) return;

    const id = Date.now();
    const { confirmPassword, ...rest } = this.registerForm().value();

    this.store.dispatch(authActions.register({ id, ...rest }));
  }
}
