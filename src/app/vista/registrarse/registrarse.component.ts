import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataApiJuegoService } from 'src/app/servicios/data-api-juego.service';
import { UsuarioI } from 'src/app/modelos/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  errorStatus!:boolean
  errorMsj!:string;

  loginForm = new FormGroup({
    name : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    password : new FormControl("", Validators.required),
    id_tipousuario : new FormControl("2",Validators.required)
  })

  constructor (private dataApiService:DataApiJuegoService,private router:Router){

  }

  registrarse(form:any){
    this.dataApiService.SignUp(form).subscribe({
      next: (s) =>{
        this.router.navigate(['Login'])
      },
      error: (err) =>{
        this.errorStatus = true;
        this.errorMsj = "Revisa que los Campos Estén Llenos.";
      }
    })
  }
}
