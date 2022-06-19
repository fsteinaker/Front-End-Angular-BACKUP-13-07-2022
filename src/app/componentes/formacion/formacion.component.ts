import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { educacion } from '../model/educacion.model';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})

export class FormacionComponent implements OnInit {
  formacionList!: educacion[];

  constructor(private educacionService : PortfolioService) { }

  ngOnInit(): void {
    this.getdatosEducacion();    
    }

    private getdatosEducacion(){
      this.educacionService.getEducacion().subscribe(
        (data ) => {
          this.formacionList = data;
          console.log(data)
        }
      );
    }

}