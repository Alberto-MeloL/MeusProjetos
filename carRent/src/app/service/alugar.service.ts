import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlugarService {

  private url:string = 'http://localhost:3000/alugar';

  constructor(private http: HttpClient) { }

  alugarCarro(carroId: any, carroDados: any):Observable<any>{
    // contruindo a rota com o id especificado
    const urlId: string =`${this.url}/${carroId}`

    // no backend faço a ação com o carro em especifico
    return this.http.post(urlId, carroDados);
  }
}
