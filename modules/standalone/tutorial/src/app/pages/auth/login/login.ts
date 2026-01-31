import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 't-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginObj = {
    emailId: '',
    password: '',
  };

  onLogin() {
    //   debugger;
    //   if (
    //     this.loginObj.emailId === 'kagura@yorozuya.edo' &&
    //     this.loginObj.password === 'suKonbuPower'
    //   ) {
    //     localStorage.setItem('loggedUserId', '12345');

    //     this.router.navigateByUrl('/variables');
    //   } else {
    //     alert('Credenciais incorretas! (Teste Local)');
    //   }
    // }
    this.authService.login(this.loginObj).subscribe({
      next: (result: any) => {
        if (result.result) {
          this.router.navigateByUrl('/variables');
        } else {
          alert(result.message || 'Credenciais incorretas!');
        }
      },
      error: (err: any) => {
        if (err.status === 401 || err.status === 400) {
          alert('E-mail ou senha inválidos!');
        } else {
          alert('Erro técnico na comunicação com o servidor. Tente novamente mais tarde.');
        }
      },
    });
  }
}
