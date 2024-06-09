import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private url = 'http://localhost:3000/alugueis';

  constructor(private http: HttpClient) {}

  listarAlugueis(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
