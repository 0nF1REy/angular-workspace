import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly apiUrl = 'https://api.freeprojectapi.com/api/UserApp/login';

  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials).pipe(
      tap((result: any) => {
        if (result.result) {
          localStorage.setItem('loggedUserId', result.data.userId);
        }
      })
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
