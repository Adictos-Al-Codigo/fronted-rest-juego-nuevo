import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JugadorI } from 'src/app/modelos/jugador.interface';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor (private dataApiJuegoService:DataApiJuegoService,private activatedRoute:ActivatedRoute, private router:Router){

  }

  editForm = new FormGroup({
    nombre_jugador: new FormControl('',Validators.required),
    numero_jugador: new FormControl('',Validators.required),
    posicion_jugador: new FormControl('',Validators.required),
    id_equipo: new FormControl('',Validators.required)
  })

  JugadorId!:any;
  error!:boolean;
  nombre_equipo:any;

  ngOnInit(): void{
    this.JugadorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataApiJuegoService.getJugador(this.JugadorId).subscribe({
      next: (s) =>{
        let Jugador:JugadorI = s;
        this.editForm.setValue({
          'nombre_jugador' : Jugador.nombre_jugador,
          'numero_jugador' : Jugador.numero_jugador,
          'posicion_jugador' : Jugador.posicion_jugador,
          'id_equipo' : Jugador.id_equipo
        })
      },
      error: (err) =>{
        debugger;
      }
    })

    this.show_teams();
  }

  show_teams(){
    this.dataApiJuegoService.getAllNameTeam().subscribe({
      next:(s) =>{
        this.nombre_equipo = s;
      },
      error:(err) =>{
        debugger;
      }
    })
  }

  actualizar_jugador(form:any){
    this.dataApiJuegoService.updated_jugador(form,this.JugadorId).subscribe({
      next: (s) =>{
        this.router.navigate(['Dashboard']);
      },
      error: (err) =>{
        this.error = true
      }
    })
  }
}
