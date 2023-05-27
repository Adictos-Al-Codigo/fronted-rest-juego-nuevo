import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { Observable } from 'rxjs'
import { ResponseI } from '../modelos/response.interface';
import { JugadoresI } from '../modelos/lista_jugadores.interface';
import { JugadorI } from '../modelos/jugador.interface';
import { UsuarioI } from '../modelos/usuario.interface';
import { EquipoI } from '../modelos/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiJuegoService {

  constructor(private httpClient:HttpClient) { }

  url_api = "http://127.0.0.1:8000/api/";

  // Api de usuario

  // Login de usuario


  Login(form:LoginI):Observable<ResponseI>{
    let direccion = this.url_api + "login";
    return this.httpClient.post<ResponseI>(direccion,form);
  }

  // Registrar un usuario

  SignUp(form:any):Observable<UsuarioI>{
    let direccion = this.url_api + "registrarse";
    return this.httpClient.post<UsuarioI>(direccion,form);
  }

  // Api de Jugadores

  // Obtener todos los jugadores

  getAllJugadors():Observable<JugadoresI[]>{
    let direccion = this.url_api + "jugador";
    return this.httpClient.get<JugadoresI[]>(direccion);
  }

  // Api de Equipo

  // Obtener todos los nombres de equipos.

  getAllNameTeam():Observable<any>{
    let direccion = this.url_api + "equipo"
    return this.httpClient.get<any>(direccion);
  }

  // Guardar Jugador

  saveJugador(form:any){
    let data = new FormData();

    let direccion = this.url_api + "jugador";

    data.append('nombre_jugador',form.nombre_jugador.toString());
    data.append('posicion_jugador',form.posicion_jugador.toString());
    data.append('numero_jugador',form.numero_jugador.toString());
    data.append('id_equipo',form.id_equipo.toString());

    return this.httpClient.post<any>(direccion,data);
  }

  // Obtener Jugador

  getJugador(id:number):Observable<JugadorI>{
    let direccion = this.url_api + "jugador/" + id;
    return this.httpClient.get<JugadorI>(direccion);
  }

  // Actualizar Jugador

  updated_jugador(form:JugadorI,id:string):Observable<JugadorI>{
    let direccion = this.url_api + "jugador/" + id;
    return this.httpClient.put<JugadorI>(direccion,form);
  }

  // Eliminar jugador


  eliminated_player(id:number){
    let direccion = this.url_api + "jugador/" + id;
    return this.httpClient.delete(direccion);
  }

  // Equipos Api

  // Todos los equipos

  GetAllTeams():Observable<EquipoI>{
    let direccion = this.url_api + "equipo";
    return this.httpClient.get<EquipoI>(direccion);
  }

  // Registrar un nuevo equipo

  SaveTeam(form:any):Observable<EquipoI>{
    let data = new FormData();
    let direccion = this.url_api + "equipo";
    data.append('nombre_equipo',form.nombre_equipo.toString());
    data.append('nombre_director_equipo',form.nombre_director_equipo.toString());
    data.append('logo_equipo',form.logo_equipo.toString());
    return this.httpClient.post<EquipoI>(direccion,data);
  }

  // Traer un Equipo

  getEquipo(id:string):Observable<EquipoI>{
    let direccion = this.url_api + "equipo/" + id + "/edit";
    return this.httpClient.get<EquipoI>(direccion);
  }

  // Actualizar Equipo

  UpdateEquipo(id:string,form:EquipoI):Observable<EquipoI>{
    let direccion = this.url_api + "equipo/" + id;
    return this.httpClient.put<EquipoI>(direccion,form);
  }

  // Eliminar Equipo

  DestroyEquipo(id:string):Observable<EquipoI>{
    let dirrecion = this.url_api + "equipo/" + id;
    return this.httpClient.delete<EquipoI>(dirrecion);
  }
}
