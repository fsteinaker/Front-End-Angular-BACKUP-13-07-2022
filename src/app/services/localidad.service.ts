import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localidad } from '../componentes/model/localidad.model';

@Injectable({
  providedIn: 'root'
})

export class LocalidadService {
  URL = 'http://localhost:8080/fsteinaker/localidad/';

  constructor(private http: HttpClient) { }

  public getLocalidad(): Observable<localidad>{
    return this.http.get<localidad>(this.URL);
  }
}