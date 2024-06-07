import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AluguelService {

  private url = 'http://localhost:3000/alugar'
  constructor(private http: HttpClient) { }

  alugarCarro(idCarro: any):Observable<any>{
    const urlId = `${this.url}/${idCarro}`
    // corpo da requisição vazio
    return this.http.post<any>(urlId, {})

  }
}
