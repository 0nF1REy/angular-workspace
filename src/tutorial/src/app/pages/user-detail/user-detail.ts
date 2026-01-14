import { ChangeDetectionStrategy, Component, inject, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../core/services/user/user';

@Component({
  selector: 't-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetail {
  private userService = inject(User);

  id = input.required<string>();

  // Estado do usuário
  user = signal<User | null>(null);
  isLoading = signal(true);

  constructor() {
    effect(() => {
      this.isLoading.set(true);
      this.userService.getUserById(this.id()).subscribe({
        next: (data) => {
          this.user.set(data);
          this.isLoading.set(false);
        },
        error: () => this.isLoading.set(false),
      });
    });
  }
}
