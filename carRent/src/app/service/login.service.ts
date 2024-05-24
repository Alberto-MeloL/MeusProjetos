import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private url = 'http://localhost:3000/login';//porque não pode ser https
static sessao: boolean = false;

constructor(private http: HttpClient) {}

    logarUsuario(email:string, senha: string):Observable<unknown>{
      return this.http.post(this.url, {email, senha})
    }
}
