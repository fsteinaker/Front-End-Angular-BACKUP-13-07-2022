import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { explaboral } from '../componentes/model/explaboral.model';
import { localidad } from '../componentes/model/localidad.model';
import { persona } from '../componentes/model/persona.model';
import { educacion } from '../componentes/model/educacion.model';
import { habilidades } from '../componentes/model/habilidades.model';
import { proyectos } from '../componentes/model/proyectos.model';

@Injectable({ providedIn: 'root' })

export class PortfolioService {
    
private apiServerUrl = environment.apiBaseUrl;
    
constructor(private http: HttpClient) { }

  public getProyectos(): Observable<proyectos[]>{
    return this.http.get<proyectos[]>(`${this.apiServerUrl}/proyectos`);
    }

  public getHabilidades(): Observable<habilidades[]>{
    return this.http.get<habilidades[]>(`${this.apiServerUrl}/habilidad`);
    }

  public getEducacion(): Observable<educacion[]>{
    return this.http.get<educacion[]>(`${this.apiServerUrl}/educacion`);
    }

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