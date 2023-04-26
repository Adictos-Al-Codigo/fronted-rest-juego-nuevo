import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginI } from '../modelos/login.interface';
import { Observable } from 'rxjs'
import { ResponseI } from '../modelos/response.interface';
import { JugadoresI } from '../modelos/lista_jugadores.interface';

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
    debugger;
  }
}
