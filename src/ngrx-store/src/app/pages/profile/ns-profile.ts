import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LucideAngularModule, Mail, Phone, User, MapPin } from 'lucide-angular';
import { profileFeature } from './store/profile-feature';
import { toSignal } from '@angular/core/rxjs-interop';
import { profileActions } from './store/profile-actions';
import { authFeatures } from '../../shared/store/auth-features';
import { MyStorage } from '../../shared/services/storage';

@Component({
  selector: 'ns-profile',
  imports: [LucideAngularModule],
  template: `<div class="min-h-screen bg-[#1A1A1B] py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-[#F3F4F6] mb-8">Meu Perfil</h1>
      @if(loading()) {
      <div class="flex items-center justify-center">
        <p class="text-[#B4B4B6]">Carregando perfil...</p>
      </div>
      } @else if(profile()) { @let userProfile = profile();
      <div class="grid gap-6 md:grid-cols-3">
        <!-- Profile Card -->
        <div class="md:col-span-1">
          <div class="bg-[#1A1A1B] rounded-sm border border-[#4CA6B8] shadow-lg p-6 text-center">
            <div
              class="size-24 mx-auto mb-4 rounded-full bg-[#4CA6B8] flex items-center justify-center"
            >
              <span class="text-3xl font-bold text-[#1A1A1B] uppercase">
                {{ (userProfile?.name)!.firstname[0] }}{{ (userProfile?.name)!.lastname[0] }}
              </span>
            </div>
            <h2 class="text-xl font-semibold text-[#F3F4F6] capitalize">
              {{ (userProfile?.name)!.firstname }} {{ (userProfile?.name)!.lastname }}
            </h2>
            <p class="text-[#B4B4B6]">&#64;{{ userProfile?.username }}</p>
          </div>
        </div>

        <!-- Details Section -->
        <div class="md:col-span-2 space-y-6">
          <!-- Contact Information -->
          <div class="bg-[#1A1A1B] rounded-sm border border-[#4CA6B8] shadow-lg p-6">
            <h3 class="text-lg font-semibold text-[#F3F4F6] mb-4">Informações de Contato</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="size-10 rounded-lg bg-[#4CA6B8]/20 flex items-center justify-center">
                  <lucide-icon [img]="icons.Mail" class="size-5 text-[#4CA6B8]" />
                </div>
                <div>
                  <p class="text-sm text-[#B4B4B6]">Email</p>
                  <p class="font-medium text-[#F3F4F6]">{{ userProfile?.email }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="size-10 rounded-lg bg-[#4CA6B8]/20 flex items-center justify-center">
                  <lucide-icon [img]="icons.Phone" class="size-5 text-[#4CA6B8]" />
                </div>
                <div>
                  <p class="text-sm text-[#B4B4B6]">Telefone</p>
                  <p class="font-medium text-[#F3F4F6]">{{ userProfile?.phone }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="size-10 rounded-lg bg-[#4CA6B8]/20 flex items-center justify-center">
                  <lucide-icon [img]="icons.User" class="size-5 text-[#4CA6B8]" />
                </div>
                <div>
                  <p class="text-sm text-[#B4B4B6]">Usuário</p>
                  <p class="font-medium text-[#F3F4F6]">{{ userProfile?.username }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Address -->
          <div class="bg-[#1A1A1B] rounded-sm border border-[#4CA6B8] shadow-lg p-6">
            <h3 class="text-lg font-semibold text-[#F3F4F6] mb-4">Endereço</h3>
            <div class="flex items-start gap-3">
              <div
                class="size-10 rounded-lg bg-[#4CA6B8]/20 flex items-center justify-center shrink-0"
              >
                <lucide-icon [img]="icons.MapPin" class="size-5 text-[#4CA6B8]" />
              </div>
              <div>
                <p class="font-medium text-[#F3F4F6] capitalize">
                  {{ userProfile?.address?.street }}
                </p>
                <p class="text-[#B4B4B6] capitalize">
                  {{ userProfile?.address?.city }}, {{ userProfile?.address?.zipcode }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NsProfile implements OnInit {
  protected readonly icons = { Mail, Phone, User, MapPin };
  private readonly store = inject(Store);
  private readonly storage = inject(MyStorage);
  protected readonly profile = toSignal(this.store.select(profileFeature.selectProfile));
  protected readonly loading = toSignal(this.store.select(profileFeature.selectLoading));
  protected readonly userId = toSignal(this.store.select(authFeatures.selectUserId));

  ngOnInit(): void {
    const userId = this.userId() || this.storage.getUserId();
    if (userId) {
      this.store.dispatch(profileActions.load({ userId }));
    }
  }
}
