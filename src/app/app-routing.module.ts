import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ErrorComponent } from './componentes/iniciar-sesion/error/error.component';
import { RegistroExitosoComponent } from './componentes/iniciar-sesion/registro-exitoso/registro-exitoso.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp/nueva-exp.component';
import { NuevaFormComponent } from './componentes/formacion/nueva-form/nueva-form.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';
import { EditarEncabezadoComponent } from './componentes/encabezado/editar-encabezado/editar-encabezado.component';
import { EditarPerfilComponent } from './componentes/perfil/editar-perfil/editar-perfil.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full'
  },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'registro-exitoso', component: RegistroExitosoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'nueva-exp', component: NuevaExpComponent },
  { path: 'editar-exp/:id', component: EditarExpComponent },
  { path: 'editar-encabezado/:id', component: EditarEncabezadoComponent },
  { path: 'editar-perfil/:id', component: EditarPerfilComponent },
  { path: 'nueva-form', component: NuevaFormComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
