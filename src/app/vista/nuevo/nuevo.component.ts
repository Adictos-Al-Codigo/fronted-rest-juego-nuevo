import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  public form!:FormGroup;

  nombre_equipo:any;
  error!:boolean

  constructor (private formBuilder:FormBuilder, private dataApiJuegoService:DataApiJuegoService, private Router:Router){
    this.form = this.formBuilder.group({
      'nombre_jugador' : ['',[Validators.required]],
      'posicion_jugador' : ['',[Validators.required]],
      'numero_jugador' : ['',[Validators.required]],
      'id_equipo' : [Math.floor(Math.random() * (5 - 1 + 1)) + 1,Validators.required],
    });
  }

  ngOnInit(){
    this.Traer_Equipos();
  }

  Traer_Equipos(){
    this.dataApiJuegoService.getAllNameTeam().subscribe({
      next:(s) =>{
        this.nombre_equipo = s;
      },
      error:(err) =>{
        debugger;
      }
    })
  }

  Guardar(){
    let data = {
      nombre_jugador: this.form.value.nombre_jugador,
      posicion_jugador: this.form.value.posicion_jugador,
      numero_jugador: this.form.value.numero_jugador,
      id_equipo: this.form.value.id_equipo
    }

    this.dataApiJuegoService.saveJugador(data).subscribe({
      next:(s) =>{
        this.Router.navigate(['Dashboard']);
      },
      error:(err) =>{
        this.error = true;
      }
    })
  }
}
