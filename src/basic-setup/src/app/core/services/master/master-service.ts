import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getAllParentCategories() {
    return this.http.get(environment.API_URL + 'get-products');
  }
}

// prod: https://api.freeprojectapi.com/api
// qa:   https://qa.freeprojectapi.com/api
// dev:  https://dev.freeprojectapi.com/api
// sit:  https://sit.freeprojectapi.com/api
