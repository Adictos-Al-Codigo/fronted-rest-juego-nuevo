import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './vista/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './vista/dashboard/dashboard.component';
import { InterceptorService } from './interceptors/interceptor.service';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { NuevoComponent } from './vista/nuevo/nuevo.component';
import { EditComponent } from './vista/edit/edit.component';
import { RegistrarseComponent } from './vista/registrarse/registrarse.component';
import { EquipoComponent } from './vista/equipo/equipo.component';
import { JugadorComponent } from './vista/jugador/jugador.component';
import { RegistrarseEComponent } from './vista/registrarse-e/registrarse-e.component';
import { NuevoEComponent } from './vista/nuevo-e/nuevo-e.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    NuevoComponent,
    EditComponent,
    RegistrarseComponent,
    EquipoComponent,
    JugadorComponent,
    RegistrarseEComponent,
    NuevoEComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
