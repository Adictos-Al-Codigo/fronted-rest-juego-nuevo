import { Component, OnInit } from '@angular/core';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  List_Of_Equipo:any;

  constructor (private dataApiJuegoService:DataApiJuegoService, private router:Router){

  }

  ngOnInit(): void {
    this.dataApiJuegoService.GetAllTeams().subscribe({
      next: (s) =>{
        this.List_Of_Equipo = s;
      },
      error: (err) =>{
        debugger;
      }
    })
  }

  Edit(id:number){
    this.router.navigate(['Edit/Equipo',id]);
  }

  Eliminar_Jugador(id:string){
    this.dataApiJuegoService.DestroyEquipo(id).subscribe({
      next: (s) =>{
        location.reload();
      },
      error: (err) =>{
        debugger;
      }
    })
  }

}
