import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { User } from '@nx-ts-paths-stack/shared';

export type ApiResponse = {
  message: string;
  user: User;
};

@Injectable({
  providedIn: 'root',
})
export class DataAccessService {
  user = httpResource<ApiResponse>(() => ({
    url: '/api',
    method: 'GET',
  }));
}
