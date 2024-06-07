import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
private url = 'http://localhost:3000/filtros';
  constructor(private http:HttpClient) { }

  listarFiltro(idCliente: any):Observable<string[]>{
const urlId = `${this.url}/${idCliente}`;
    return this.http.get<string[]>(urlId);
  }
}
