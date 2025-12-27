import { Component } from '@angular/core';

@Component({
  selector: 'ns-login',
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 bg-[#1A1A1B]">
      <!-- Login Container -->
      <div class="w-full max-w-md">
        <!-- Card -->
        <div class="rounded-sm p-8 shadow-2xl bg-[#1A1A1B]">
          <!-- Header -->
          <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold tracking-tight mb-2 text-[#F3F4F6]">
              Bem-vindo de Volta
            </h1>
            <p class="text-sm text-[#4CA6B8]">Faça login na sua conta para continuar</p>
          </div>

          <!-- Form -->
          <form>
            <!-- Email/Username Field -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-[#F3F4F6]">
                Email ou Usuário
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@exemplo.com"
                class="w-full px-4 py-3 rounded-sm text-sm transition-all duration-200 border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
                (focus)="onEmailFocus(true)"
                (blur)="onEmailFocus(false)"
              />
              <p class="text-xs h-5 text-[#C1272D]">
                <!-- Error message will appear here -->
              </p>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-semibold text-[#F3F4F6]">
                  Senha
                </label>
                <a
                  href="#"
                  class="text-xs transition-colors duration-200 text-[#4CA6B8] hover:opacity-80"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                class="w-full px-4 py-3 rounded-sm text-sm transition-all duration-200 border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
                (focus)="onPasswordFocus(true)"
                (blur)="onPasswordFocus(false)"
              />
              <p class="text-xs h-5 text-[#C1272D]">
                <!-- Error message will appear here -->
              </p>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              class="w-full py-3 px-4 rounded-sm font-bold text-sm tracking-wide transition-all duration-200 text-gray-950 shadow-lg bg-[#4CA6B8]"
              (mouseenter)="isLoginHovered = true"
              (mouseleave)="isLoginHovered = false"
              [style.transform]="isLoginHovered ? 'translateY(-2px)' : 'translateY(0)'"
              [style.box-shadow]="
                isLoginHovered
                  ? '0 12px 24px rgba(76, 166, 184, 0.4)'
                  : '0 8px 16px rgba(76, 166, 184, 0.3)'
              "
            >
              Entrar
            </button>

            <!-- Divider -->
            <div class="flex items-center gap-3 my-6">
              <div class="flex-1 h-px bg-[rgba(243,244,246,0.1)]"></div>
              <span class="text-xs text-[#4CA6B8]">ou</span>
              <div class="flex-1 h-px bg-[rgba(243,244,246,0.1)]"></div>
            </div>

            <!-- Register Link -->
            <p class="text-center text-sm text-[#F3F4F6]">
              Não tem uma conta?
              <a
                href="/register"
                class="font-semibold transition-colors duration-200 text-[#4CA6B8] hover:opacity-80"
              >
                Registre-se
              </a>
            </p>
          </form>

          <!-- Footer Note -->
          <p class="text-xs text-center mt-8 text-[rgba(243,244,246,0.5)]">
            Ao fazer login, você concorda com nossos Termos de Serviço
          </p>
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'min-h-screen flex items-center justify-center p-4 bg-[#1A1A1B]',
  },
})
export class NsLogin {
  isLoginHovered = false;

  onEmailFocus(focused: boolean) {}

  onPasswordFocus(focused: boolean) {}
}
