import { Component, OnInit } from '@angular/core';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';
import { JugadoresI } from 'src/app/modelos/lista_jugadores.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

}
