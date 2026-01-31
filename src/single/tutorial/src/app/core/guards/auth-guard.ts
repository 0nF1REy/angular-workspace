import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userId = localStorage.getItem('loggedUserId');

  if (!userId) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
