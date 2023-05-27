import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoI } from 'src/app/modelos/equipo.interface';

@Component({
  selector: 'app-nuevo-e',
  templateUrl: './nuevo-e.component.html',
  styleUrls: ['./nuevo-e.component.css']
})
export class NuevoEComponent {

  EquipoId:any;
  error!:boolean;
  constructor(private dataApiJuegoService:DataApiJuegoService, private activatedRoute:ActivatedRoute,private router:Router) {
    
  }

  editForm = new FormGroup({
    nombre_equipo : new FormControl('',Validators.required),
    nombre_director_equipo : new FormControl('',Validators.required),
    logo_equipo : new FormControl('', Validators.required)
  })

  ngOnInit():void{
    this.EquipoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataApiJuegoService.getEquipo(this.EquipoId).subscribe({
      next: (s) =>{
        let Equipo:EquipoI = s;
        this.editForm.setValue({
          'nombre_equipo' : Equipo.nombre_equipo,
          'nombre_director_equipo' : Equipo.nombre_director_equipo,
          'logo_equipo' : Equipo.logo_equipo
        })
      },
      error: (err) =>{
        debugger;
      }
    })
  }

  actualizar_jugador(form:any){
    this.dataApiJuegoService.UpdateEquipo(this.EquipoId,form).subscribe({
      next: (s) =>{
        this.router.navigate(['Dashboard'])
      },
      error: (err) =>{
        this.error = true;
      }
    })
  }
}
