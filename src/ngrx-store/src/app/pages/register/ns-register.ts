import { Component } from '@angular/core';
import { NsButton } from '../../shared/components/ns-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ns-register',
  imports: [NsButton, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center p-4 bg-[#1A1A1B]">
      <!-- Register Container -->
      <div class="w-full max-w-md">
        <!-- Card -->
        <div class="rounded-sm p-8 shadow-2xl bg-[#1A1A1B]">
          <!-- Header -->
          <div class="mb-8 text-center">
            <h1 class="text-3xl font-bold tracking-tight mb-2 text-[#F3F4F6]">Criar Conta</h1>
            <p class="text-sm text-[#4CA6B8]">Cadastre-se para começar a usar nossa plataforma</p>
          </div>

          <!-- Form -->
          <form>
            <!-- Username Field -->
            <div class="space-y-2">
              <label for="username" class="block text-sm font-semibold text-[#F3F4F6]">
                Usuário
              </label>
              <input
                id="username"
                type="text"
                placeholder="Digite seu nome de usuário"
                class="w-full px-4 py-3 rounded-sm text-sm transition-all duration-200 border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <p class="text-xs h-5 text-[#C1272D]">
                <!-- Error message will appear here -->
              </p>
            </div>

            <!-- Email Field -->
            <div class="space-y-2">
              <label for="email" class="block text-sm font-semibold text-[#F3F4F6]"> Email </label>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                class="w-full px-4 py-3 rounded-sm text-sm transition-all duration-200 border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <p class="text-xs h-5 text-[#C1272D]">
                <!-- Error message will appear here -->
              </p>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
              <label for="password" class="block text-sm font-semibold text-[#F3F4F6]">
                Senha
              </label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                class="w-full px-4 py-3 rounded-sm text-sm transition-all duration-200 border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <p class="text-xs h-5 text-[#C1272D]">
                <!-- Error message will appear here -->
              </p>
            </div>

            <!-- Confirm Password Field -->
            <div class="space-y-2">
              <label for="confirm-password" class="block text-sm font-semibold text-[#F3F4F6]">
                Confirmar Senha
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirme sua senha"
                class="w-full px-4 py-3 rounded-sm text-sm transition-all duration-200 border-2 border-[#4CA6B8] bg-[rgba(31,31,32,0.5)] text-[#F3F4F6] focus:outline-none"
              />
              <p class="text-xs h-5 text-[#C1272D]">
                <!-- Error message will appear here -->
              </p>
            </div>

            <!-- Register Button -->
            <button variant="primary" size="md" nsButton type="submit" class="w-full">
              Registrar
            </button>

            <!-- Divider -->
            <div class="flex items-center gap-3 my-6">
              <div class="flex-1 h-px bg-[rgba(243,244,246,0.1)]"></div>
              <span class="text-xs text-[#4CA6B8]">ou</span>
              <div class="flex-1 h-px bg-[rgba(243,244,246,0.1)]"></div>
            </div>

            <!-- Login Link -->
            <p class="text-center text-sm text-[#F3F4F6]">
              Já tem uma conta?
              <a
                routerLink="/login"
                class="font-semibold transition-colors duration-200 text-[#4CA6B8] hover:opacity-80"
              >
                Faça login
              </a>
            </p>
          </form>

          <!-- Footer Note -->
          <p class="text-xs text-center mt-8 text-[rgba(243,244,246,0.5)]">
            Ao se registrar, você concorda com nossos Termos de Serviço
          </p>
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'min-h-screen flex items-center justify-center p-4 bg-[#1A1A1B]',
  },
})
export class NsRegister {}
