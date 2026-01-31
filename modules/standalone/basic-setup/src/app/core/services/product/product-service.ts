import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GlobalConstants } from '../../constants/global.constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);

  getAllProduct() {
    return this.http.get(
      environment.API_URL + GlobalConstants.API_ENDPOINTS.PRODUCT.GET_ALL_PRODUCTS
    );
  }
}
