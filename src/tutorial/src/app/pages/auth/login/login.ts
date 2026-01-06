import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 't-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: loginModel = new loginModel();

  router = inject(Router);
  http = inject(HttpClient);

  onLogin() {
    // if (this.loginObj.email == 'alanryan619@gmail.com' && this.loginObj.password == 'alan.2020') {
    //   this.router.navigateByUrl('/variables');
    // } else {
    //   alert('Credenciais incorretas!');
    // }

    debugger;
    this.http.post('https://api.freeprojectapi.com/api/UserApp/login', this.loginObj).subscribe({
      next: (result: any) => {
        debugger;
        localStorage.setItem('loggedUserId', result.data.userId);
        this.router.navigateByUrl('/variables');
      },
      error: (error: any) => {
        debugger;
        alert('Credenciais incorretas!');
      },
    });
  }
}

class loginModel {
  emailId: string;
  password: string;

  constructor() {
    this.emailId = '';
    this.password = '';
  }
}
