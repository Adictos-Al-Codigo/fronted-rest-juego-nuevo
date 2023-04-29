import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { Observable } from 'rxjs'
import { ResponseI } from '../modelos/response.interface';
import { JugadoresI } from '../modelos/lista_jugadores.interface';
import { JugadorI } from '../modelos/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiJuegoService {

  constructor(private httpClient:HttpClient) { }

  url_api = "http://127.0.0.1:8000/api/";

  Login(form:LoginI):Observable<ResponseI>{
    let direccion = this.url_api + "login";
    return this.httpClient.post<ResponseI>(direccion,form);
  }

  getAllJugadors():Observable<JugadoresI[]>{
    let direccion = this.url_api + "jugador";
    return this.httpClient.get<JugadoresI[]>(direccion);
  }

  getAllNameTeam():Observable<any>{
    let direccion = this.url_api + "equipo"
    return this.httpClient.get<any>(direccion);
  }

  saveJugador(form:any){
    let data = new FormData();

    let direccion = this.url_api + "jugador";

    data.append('nombre_jugador',form.nombre_jugador.toString());
    data.append('posicion_jugador',form.posicion_jugador.toString());
    data.append('numero_jugador',form.numero_jugador.toString());
    data.append('id_equipo',form.id_equipo.toString());

    return this.httpClient.post<any>(direccion,data);
  }

  getJugador(id:number):Observable<JugadorI>{
    let direccion = this.url_api + "jugador/" + id;
    return this.httpClient.get<JugadorI>(direccion);
  }

  updated_jugador(form:JugadorI,id:string):Observable<JugadorI>{
    let direccion = this.url_api + "jugador/" + id;
    return this.httpClient.put<JugadorI>(direccion,form);
  }
}
