import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private url = 'http://localhost:3000/locacoes';

  constructor(private http: HttpClient) { }

  listarCarros():Observable<string[]>{
    return this.http.get<string[]>(this.url);
  }
}
