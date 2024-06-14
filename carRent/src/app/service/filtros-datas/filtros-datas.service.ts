import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FiltrosDatasService {
  private url = 'http://localhost:3000/filtros-datas';

  constructor(private http: HttpClient) {}

  listarDatas(data_locacao: string, datalocacao:string): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
