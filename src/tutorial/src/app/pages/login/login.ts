import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: loginModel = new loginModel();

  router = inject(Router);

  onLogin() {
    if (this.loginObj.email == 'alanryan619@gmail.com' && this.loginObj.password == 'alan.2020') {
      this.router.navigateByUrl('/variables');
    } else {
      alert('Credenciais incorretas!');
    }
  }
}

class loginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
