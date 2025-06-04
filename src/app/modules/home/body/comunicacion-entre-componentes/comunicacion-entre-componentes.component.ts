import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../../../model/usuario';
import { Location } from '@angular/common';


@Component({
  selector: 'app-comunicacion-entre-componentes',
  templateUrl: './comunicacion-entre-componentes.component.html',
  styleUrl: './comunicacion-entre-componentes.component.css',
})
export class ComunicacionEntreComponentesComponent {

    constructor(private readonly location: Location) {}


  public recibirMensaje(mensajeHijo: string): void {
    Swal.fire({
      title: '@Output',
      text: mensajeHijo,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  public recibirMensajeObject(user: Usuario): void {
    Swal.fire({
      title: '@Output',
      text: user.nombre +" "+ user.apellidoPaterno +" "+ user.apellidoMaterno,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

  
   volver(): void {
    this.location.back();
  }
}


