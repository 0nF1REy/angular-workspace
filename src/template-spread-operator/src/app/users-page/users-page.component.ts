import { Component, computed, signal } from '@angular/core';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { JsonPipe } from '@angular/common';
import {
  invitedUsers,
  pinnedUsers,
  searchResults,
  suggestedUsers,
  User,
  updateUsersData,
} from './users.data';

@Component({
  selector: 'spread-demo-page',
  imports: [ActionButtonComponent],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.scss',
})
export class UsersPageComponent {
  protected readonly isAdmin = signal(true);
  protected readonly selection = signal<Set<string>>(new Set());

  // Expõe os sinais originais diretamente para que o template possa acessá-los de forma reativa
  protected readonly pinnedUsers = pinnedUsers;
  protected readonly searchResults = searchResults;
  protected readonly suggestedUsers = suggestedUsers;
  protected readonly invitedUsers = invitedUsers;

  protected readonly users = computed(() => [
    ...this.pinnedUsers(),
    ...this.searchResults(),
    ...this.suggestedUsers(),
    ...this.invitedUsers(),
  ]);

  protected readonly selectedCount = computed(() => this.selection().size);
  protected readonly isBusy = signal(false);

  protected toggleUserSelection(userId: string) {
    this.selection.update((selected) => {
      const updated = new Set(selected);
      updated.has(userId) ? updated.delete(userId) : updated.add(userId);
      return updated;
    });
  }

  protected toggleAllSelection(users: User[]) {
    this.selection.update((selected) =>
      selected.size === users.length ? new Set<string>() : new Set(users.map((u) => u.id)),
    );
  }

  protected onAdminChange(event: Event) {
    this.isAdmin.set((event.target as HTMLInputElement).checked);
  }

  protected onBusyChange(event: Event) {
    this.isBusy.set((event.target as HTMLInputElement).checked);
  }

  protected deleteAction() {
    console.log('Ação: excluir', Array.from(this.selection()));
  }

  protected track(...args: unknown[]) {
    console.log('Telemetria:', args);
  }

  protected modifyUsersList() {
    updateUsersData();
  }
}
