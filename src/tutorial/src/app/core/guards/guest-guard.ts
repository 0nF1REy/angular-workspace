import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('loggedUserId');
  if (localData != null) {
    router.navigateByUrl('/variables');
    return false;
  } else {
    return true;
  }
};
