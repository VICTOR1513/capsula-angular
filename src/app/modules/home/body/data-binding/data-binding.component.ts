import { Component } from '@angular/core';
import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {

  public titulo1:string = 'Data Binding en Angular';

  public titulo:string = 'Texto con interpolación ';
  public imagen:string = 'https://angular.io/assets/images/logos/angular/angular.png';
  public estaDeshabilitado:boolean = true;
  public nombreUsuario:string = '';

  constructor(private readonly location: Location, public alertService: AlertService) { }

  public mostrarSaludo(): void {
    Swal.fire({
      title: 'Event Binding',
      text: this.nombreUsuario,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }

   volver(): void {
    this.location.back();
  }
}
