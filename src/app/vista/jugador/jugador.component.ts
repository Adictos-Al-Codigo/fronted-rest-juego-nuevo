import { Component, OnInit } from '@angular/core';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';
import { JugadoresI } from 'src/app/modelos/lista_jugadores.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  constructor(private dataApiJuegoService:DataApiJuegoService, private router:Router) {
     
  }

  List_Of_Jugador!:JugadoresI[];

  ngOnInit(): void {
    this.dataApiJuegoService.getAllJugadors().subscribe({
      next:(s) =>{
        this.List_Of_Jugador = s;
        debugger;
      },
      error:(err) =>{
        debugger;
      }
    })
  }

  NuevoJugador(){
    this.router.navigate(['Nuevo']);
  }

  Edit(id:number){
    this.router.navigate(['Edit',id]);
  }

  Eliminar_Jugador(id:number){
    this.dataApiJuegoService.eliminated_player(id).subscribe({
      next: (s) =>{
        location.reload();
      },
      error: (err) =>{
        debugger;
      }
    })
  }
}
