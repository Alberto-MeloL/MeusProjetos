import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinalizarAlugueisService {
  private url = 'http://localhost:3000/finalizar';
  constructor(private http: HttpClient) {}

  finalizarAlgueis(): Observable<any> {
    return this.http.post(this.url, {});
  }
}
