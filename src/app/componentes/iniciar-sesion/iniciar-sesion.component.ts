import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {

  usuario = {
    email: '',
    password: ''
  }
  router: any;

  constructor(private authService: AuthService) {

  }

  Ingresar() {
      const { email,password } = this.usuario;
      this.authService.login(email,password).then(res=>{
      console.log("Se registro: ",res);
      this.router.navigateByUrl('/portfolio')
    })
  }  

    IngresarConGoogle() {
      const { email,password } = this.usuario;
      this.authService.loginWithGoogle(email,password).then(res=>{
        console.log("Inicio sesion con Google: ",res);
        this.router.navigateByUrl('/portfolio') 
    })
  }

}