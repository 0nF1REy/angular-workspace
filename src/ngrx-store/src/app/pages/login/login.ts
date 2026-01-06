import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, Field, required, minLength } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { FormErrors } from '../../shared/components/form-errors';
import { Store } from '@ngrx/store';
import { authActions } from '../../shared/store/auth-actions';
import { authFeatures } from '../../shared/store/auth-features';
import { toSignal } from '@angular/core/rxjs-interop';
import { Button } from '../../shared/components/button';

@Component({
  selector: 'ns-login',
  imports: [Button, RouterLink, Field, FormsModule, FormErrors],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 bg-[#1A1A1B]">
      <div class="w-full max-w-md">
        <div class="rounded-sm p-8 shadow-2xl bg-[#1A1A1B]">
          <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold tracking-tight mb-2 text-[#F3F4F6]">
              Bem-vindo de Volta
            </h1>
            <p class="text-sm text-[#4CA6B8]">Faça login na sua conta para continuar</p>
          </div>

          <form (ngSubmit)="onSubmit($event)" class="space-y-6">
            <!-- Username -->
            <div>
              <label for="username" class="block text-sm font-semibold text-[#F3F4F6] mb-2">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                [field]="loginForm.username"
                autocomplete="username"
                placeholder="Digite seu nome de usuário"
                class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <ns-form-errors [control]="loginForm.username()"></ns-form-errors>
            </div>

            <!-- Password -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label for="password" class="block text-sm font-semibold text-[#F3F4F6]">
                  Senha
                </label>
                <a href="#" class="text-xs text-[#4CA6B8] hover:opacity-80"> Esqueceu a senha? </a>
              </div>
              <input
                id="password"
                type="password"
                [field]="loginForm.password"
                autocomplete="current-password"
                placeholder="Digite sua senha"
                class="w-full px-4 py-3 rounded-sm text-sm border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <ns-form-errors [control]="loginForm.password()"></ns-form-errors>
            </div>

            <!-- Error Message -->
            @if (error()) {
            <div class="p-4 rounded-sm bg-red-900/30 border border-red-600 text-red-400 text-sm">
              {{ error() }}
            </div>
            }

            <!-- Button -->
            <button
              nsButton
              variant="primary"
              size="md"
              type="submit"
              class="w-full"
              [disabled]="loginForm().invalid() || isLoading()"
            >
              {{ isLoading() ? 'Entrando...' : 'Entrar' }}
            </button>

            <!-- Register -->
            <p class="text-center text-sm text-[#F3F4F6]">
              Não tem uma conta?
              <a routerLink="/register" class="font-semibold text-[#4CA6B8] hover:opacity-80">
                Registre-se
              </a>
            </p>
          </form>

          <p class="text-xs text-center mt-8 text-[rgba(243,244,246,0.5)]">
            Ao fazer login, você concorda com nossos Termos de Serviço
          </p>
        </div>
      </div>
    </div>
  `,
})
export class Login {
  loginModel = signal({
    username: 'johnd',
    password: 'm38rmF$',
  });

  loginForm = form(this.loginModel, (root) => {
    required(root.username, { message: 'O nome de usuário é obrigatório' });
    required(root.password, { message: 'A senha é obrigatória' });
    minLength(root.password, 6, {
      message: 'A senha deve ter no mínimo 6 caracteres',
    });
  });

  private readonly store = inject(Store);
  protected readonly isLoading = toSignal(this.store.select(authFeatures.selectIsLoading));
  protected readonly error = toSignal(this.store.select(authFeatures.selectError));

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.loginForm().valid()) {
      this.store.dispatch(authActions.login(this.loginForm().value()));
    }
  }
}
