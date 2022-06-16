import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, public router: Router) {

  }
  
  Ingresar() {
      const { email,password } = this.usuario;
      this.authService.register(email,password).then(res=>{
      console.log("Se registro: ",res);
      this.router.navigateByUrl('/portfolio')  
    })
  }

    IngresarConGoogle(): void {
      const { email,password } = this.usuario;
      this.authService.loginWithGoogle(email,password).then(res=>{
        console.log("Se registro: ",res);
        this.router.navigateByUrl('/portfolio')
    })
  }
}