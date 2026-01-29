import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { User } from '@nx-ts-paths-stack/shared';

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  user = httpResource<User>(() => ({
    url: '/api',
    method: 'GET'
  }));
}
