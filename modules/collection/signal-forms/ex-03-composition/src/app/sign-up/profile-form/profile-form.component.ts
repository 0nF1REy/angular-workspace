import { Component } from '@angular/core';
import { form, submit } from '@angular/forms/signals';
import { signal } from '@angular/core';
import {
  createAccountModel,
  buildAccountSection,
  Account,
} from '../../account/account-form/account-form.model';
import {
  createAddressModel,
  buildAddressSection,
  Address,
} from '../../shipping/address-form/address-form.model';
import {
  createPreferencesModel,
  buildPreferencesSection,
  Preferences,
} from '../../account/preferences-form/preferences-form.model';
import { AccountFormComponent } from '../../account/account-form/account-form.component';
import { AddressFormComponent } from '../../shipping/address-form/address-form.component';
import { PreferencesFormComponent } from '../../account/preferences-form/preferences-form.component';
import { DebugPanelComponent } from '../../shared/debug-panel/debug-panel.component';

// Interface do modelo do formulário de perfil
interface Profile {
  account: Account;
  shippingAddress: Address;
  preferences: Preferences;
}

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  imports: [
    AccountFormComponent,
    AddressFormComponent,
    PreferencesFormComponent,
    DebugPanelComponent,
  ],
})
export class ProfileFormComponent {
  // Criação do modelo principal do formulário
  readonly model = signal<Profile>({
    account: createAccountModel()(),
    shippingAddress: createAddressModel()(),
    preferences: createPreferencesModel()(),
  });

  // Montagem do formulário usando os construtores de cada seção
  readonly form = form(this.model, (s) => {
    // Constrói cada seção usando seus respectivos builders
    buildAccountSection(s.account);
    buildAddressSection(s.shippingAddress);
    buildPreferencesSection(s.preferences);
  });

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    submit(this.form, async (data) => {
      console.log('Formulário enviado:', data().value());

      // Retorna undefined se o envio for bem-sucedido
      // Retorna erros de validação caso existam erros no servidor
      return undefined;
    });
  }
}
