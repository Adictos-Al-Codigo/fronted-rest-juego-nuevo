import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vista/login/login.component';
import { DashboardComponent } from './vista/dashboard/dashboard.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';
import { EditComponent } from './vista/edit/edit.component';
import { RegistrarseComponent } from './vista/registrarse/registrarse.component';
import { JugadorComponent } from './vista/jugador/jugador.component';
import { EquipoComponent } from './vista/equipo/equipo.component';
import { RegistrarseEComponent } from './vista/registrarse-e/registrarse-e.component';
import { NuevoEComponent } from './vista/nuevo-e/nuevo-e.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Login', pathMatch: 'full'
  },
  {
    path: 'Login',
    component:LoginComponent
  },
  {
    path: "Dashboard",
    component: DashboardComponent
  },
  {
    path: "Nuevo",
    component: NuevoComponent
  },
  {
    path: "Edit/:id",
    component: EditComponent
  },
  {
    path: "Registrarse",
    component: RegistrarseComponent
  },
  {
    path: "Jugador",
    component: JugadorComponent
  },
  {
    path: "Equipo",
    component: EquipoComponent
  },
  {
    path: "Registrarse/Equipo",
    component: RegistrarseEComponent
  },
  {
    path: "Edit/Equipo/:id",
    component: NuevoEComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent, NuevoComponent, EditComponent, RegistrarseComponent, RegistrarseEComponent, NuevoEComponent];