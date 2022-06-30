import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ErrorComponent } from './componentes/iniciar-sesion/error/error.component';
import { RegistroExitosoComponent } from './componentes/iniciar-sesion/registro-exitoso/registro-exitoso.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp/nueva-exp.component';
import { NuevaFormComponent } from './componentes/formacion/nueva-form/nueva-form.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp/editar-exp.component';

const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent},
  {path: 'registrarse',component:RegistrarseComponent},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
  {path: 'error',component:ErrorComponent},
  {path: 'registro-exitoso',component: RegistroExitosoComponent},
  {path: 'nueva-exp',component:NuevaExpComponent},
  {path: 'editar-exp/:id',component:EditarExpComponent},
  {path: 'nueva-form',component:NuevaFormComponent},
  {path: '',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
