import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly loginUrl = 'https://api.freeprojectapi.com/api/UserApp/login';
  private readonly registerUrl = 'https://api.freeprojectapi.com/api/UserApp/CreateNewUser';

  login(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials).pipe(
      tap((result: any) => {
        if (result.result) {
          localStorage.setItem('loggedUserId', result.data.userId);
        }
      }),
    );
  }

  register(userObj: any): Observable<any> {
    return this.http.post(this.registerUrl, userObj).pipe(
      tap((result: any) => {
        if (result.result) {
          localStorage.setItem('loggedUserId', result.data.userId);
        }
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('loggedUserId');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('loggedUserId');
  }
}
