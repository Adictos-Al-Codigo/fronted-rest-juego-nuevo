import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';
import { EquipoI } from 'src/app/modelos/equipo.interface';

@Component({
  selector: 'app-registrarse-e',
  templateUrl: './registrarse-e.component.html',
  styleUrls: ['./registrarse-e.component.css']
})
export class RegistrarseEComponent {

  error!:boolean;

  constructor (private dataApiJuegoService:DataApiJuegoService, private router:Router){

  }

  form = new FormGroup({
    nombre_equipo : new FormControl("",Validators.required),
    nombre_director_equipo : new FormControl("",Validators.required),
    logo_equipo : new FormControl("",Validators.required)
  });

  Guardar(){
    let data = {
      nombre_equipo: this.form.value.nombre_equipo,
      nombre_director_equipo : this.form.value.nombre_director_equipo,
      logo_equipo : this.form.value.logo_equipo
    }

    this.dataApiJuegoService.SaveTeam(data).subscribe({
      next: (s) =>{
        this.router.navigate(['Dashboard']);
      },
      error: (err) =>{
        this.error = true;
      }
    })
  }
}
