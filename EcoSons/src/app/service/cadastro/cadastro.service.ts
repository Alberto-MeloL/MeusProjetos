import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = 'http://localhost:3000/cadastro'

  constructor(private http: HttpClient) { }


  cadastrarUsuario(dadosUsuario: unknown): Observable<unknown>{

    return this.http.post(this.url, dadosUsuario)
  }
}

