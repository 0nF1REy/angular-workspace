import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstants } from '../../constants/global.constant';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getAllParentCategories() {
    return this.http.get(
      environment.API_URL + GlobalConstants.API_ENDPOINTS.MASTER.GET_PARENT_CATEGORY
    );
  }
}

// prod: https://api.freeprojectapi.com/api
// qa:   https://qa.freeprojectapi.com/api
// dev:  https://dev.freeprojectapi.com/api
// sit:  https://sit.freeprojectapi.com/api
