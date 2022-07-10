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
import { EditarFormComponent } from './componentes/formacion/editar-form/editar-form.component';
import { NuevaHabComponent } from './componentes/habilidades/nueva-hab/nueva-hab.component';
import { EditarHabComponent } from './componentes/habilidades/editar-hab/editar-hab.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full',
  },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'registro-exitoso', component: RegistroExitosoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'nueva-exp', component: NuevaExpComponent },
  { path: 'nueva-form', component: NuevaFormComponent },
  { path: 'editar-exp/:id', component: EditarExpComponent },
  { path: 'editar-encabezado/:id', component: EditarEncabezadoComponent },
  { path: 'editar-perfil/:id', component: EditarPerfilComponent },
  { path: 'editar-form/:id', component: EditarFormComponent },
  { path: 'nueva-hab', component: NuevaHabComponent },
  { path: 'editar-hab/:id', component: EditarHabComponent },
  { path: 'nueva-proyecto', component: NuevoProyectoComponent },
  { path: 'editar-proyecto/:id', component: EditarProyectoComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
