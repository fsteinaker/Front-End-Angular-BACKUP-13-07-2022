import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { explaboral } from '../model/explaboral.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
explaboralList!: explaboral[];

  constructor(public explaboralService : PortfolioService) { }

  ngOnInit(): void {
    this.getdatosExpLab();    
    }

    private getdatosExpLab(){
      this.explaboralService.getExplaboral().subscribe(
        (data ) => {
          this.explaboralList = data;
          console.log(data)
        }
      );
    }

}