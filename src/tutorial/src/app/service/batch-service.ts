import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.freeprojectapi.com/api/FeesTracking/batches';

  getAllBatches(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  saveBatch(batch: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, batch);
  }
}
