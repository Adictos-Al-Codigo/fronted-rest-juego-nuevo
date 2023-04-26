import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vista/login/login.component';
import { DashboardComponent } from './vista/dashboard/dashboard.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent];