import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { proyectos } from '../model/proyectos.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosList!: proyectos[];
  constructor(private proyectoService:PortfolioService) { }

  ngOnInit(): void {
    this.getdatosProyectos();
  }

  private getdatosProyectos(){
    this.proyectoService.getProyectos().subscribe((data ) => {
      this.proyectosList = data;
      console.log(data)
      }
    );
  }
}
