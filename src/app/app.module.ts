import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ErrorComponent } from './componentes/iniciar-sesion/error/error.component';
import { RegistroExitosoComponent } from './componentes/iniciar-sesion/registro-exitoso/registro-exitoso.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp/nueva-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { NuevaFormComponent } from './componentes/formacion/nueva-form/nueva-form.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthGuardModule } from '@angular/fire/auth-guard';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PerfilComponent,
    ExperienciaComponent,
    FormacionComponent,
    HabilidadesComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    ProyectosComponent,
    FooterComponent,
    RegistrarseComponent,
    ErrorComponent,
    RegistroExitosoComponent,
    NavbarComponent,
    NuevaExpComponent,
    NuevaFormComponent,
    EditarExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AuthGuardModule,
    AngularFireAuthModule,
    // Animacion grafico circular habilidades.component.html
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 800,
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }