import { Component, OnInit } from '@angular/core';

import { persona } from '../model/persona.model';
import { localidad } from '../model/localidad.model';

import { PortfolioService } from 'src/app/services/portfolio.service';

                //import { AuthService } from 'src/app/services/auth.service';
                //import { PorfolioService } from 'src/app/servicios/porfolio.service';
                
                              //miPorfolio:any;
                              //constructor(private datosPorfolio:PorfolioService) { }
                
                              //ngOnInit(): void {
                              //this.datosPorfolio.ObtenerDatos().subscribe(data =>{
                                //console.log(data);
                                //this.miPorfolio=data;
                              //});

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  persona: persona | any;
  localidad: localidad | any;
  authService: any;
  router: any;

          constructor(public personaService: PortfolioService, public localidadService: PortfolioService) { }

          ngOnInit(): void {

                  this.personaService.getPersona().subscribe(data => {
                    console.log(data);
                    this.persona = data;
                  }),

                  this.localidadService.getLocalidad().subscribe(data => {
                    console.log(data);
                    this.localidad = data;
                  })
            
          };

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/iniciar-sesion')
  }
}