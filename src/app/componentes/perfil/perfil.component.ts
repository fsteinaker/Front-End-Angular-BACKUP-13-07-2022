import { Component, OnInit } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio.service';

import { persona } from '../model/persona.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {  
  persona: persona | any;

  constructor(public personaService: PortfolioService) { }

  ngOnInit(): void {

          this.personaService.getPersona().subscribe(data => {
            console.log(data);
            this.persona = data;
          })
        };
}