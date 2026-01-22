import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 't-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal(false);

  registerObj = {
    userId: 0,
    fullName: '',
    emailId: '',
    password: '',
  };

  onRegister() {
    this.isLoading.set(true);

    this.authService.register(this.registerObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          this.router.navigateByUrl('/variables');
        } else {
          alert(res.message || 'Falha ao realizar o registro.');
        }
        this.isLoading.set(false);
      },
      error: () => {
        alert('Erro técnico ao tentar registrar. Tente novamente.');
        this.isLoading.set(false);
      },
    });
  }
}
