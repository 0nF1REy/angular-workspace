import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../core/services/user/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 't-user-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserList implements OnInit {
  private userService = inject(User);

  usersList = signal<User[]>([]);

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    this.userService.getUsers().subscribe({
      next: (res: User[]) => {
        this.usersList.set(res);
        console.log('Usuários carregados:', res);
      },
      error: (err) => console.error('Erro na API:', err),
    });
  }
}
