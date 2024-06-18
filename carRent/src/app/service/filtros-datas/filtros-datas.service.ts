import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FiltrosDatasService {
  private url = 'http://localhost:3000/filtros-datas';

  constructor(private http: HttpClient) {}

  listarDatas(dataLocacao: string, dataDevolucao:string): Observable<string[]> {
    return this.http.post<string[]>(this.url,{dataLocacao,dataDevolucao});
  }
}
