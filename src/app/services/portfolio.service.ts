import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { explaboral } from '../componentes/model/explaboral.model';
import { localidad } from '../componentes/model/localidad.model';
import { persona } from '../componentes/model/persona.model';

@Injectable({ providedIn: 'root' })

export class PortfolioService {
    
private apiServerUrl = environment.apiBaseUrl;
    
constructor(private http: HttpClient) { }

  public getExplaboral(): Observable<explaboral[]>{
    return this.http.get<explaboral[]>(`${this.apiServerUrl}/explaboral`);
    }

    public getLocalidad(): Observable<localidad>{
        return this.http.get<localidad>(`${this.apiServerUrl}/localidad`);
    }
  
    public getPersona(): Observable<persona>{
        return this.http.get<persona>(`${this.apiServerUrl}/persona`);
    }
  }