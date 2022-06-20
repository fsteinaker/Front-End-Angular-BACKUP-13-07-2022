import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service'; 
import { habilidades } from '../model/habilidades.model';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadList!: habilidades[];
  constructor(private habilidadService:PortfolioService) { }

  ngOnInit(): void {
    this.getdatosHabilidades();
  }

    private getdatosHabilidades(){
    this.habilidadService.getHabilidades().subscribe((data ) => {
      this.habilidadList = data;
      console.log(data)
      }
    );
  }
}
