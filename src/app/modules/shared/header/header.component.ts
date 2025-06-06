import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GlobalUtils } from '../../../utils/global-utils';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  public nombreApp: string = environment.APP_NAME;
  public nombreUsuario: string = 'Administrador';
  public isLoggedIn: boolean = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem(GlobalUtils.TOKEN_KEY);
    if (token) {
      this.isLoggedIn = true;
      this.nombreUsuario = sessionStorage.getItem(GlobalUtils.NOMBRE_USUARIO) ?? '';
    }
  }

  cerrarSesion() {
    Swal.fire({
      title: '¿Cerrar sesión?',
      text: '¿Estás seguro de que deseas cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'boton-aceptar',
        cancelButton: 'boton-cancelar',
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem(GlobalUtils.TOKEN_KEY);
        sessionStorage.removeItem(GlobalUtils.NOMBRE_USUARIO);

        sessionStorage.removeItem(GlobalUtils.ROLES_USUARIO);
        sessionStorage.removeItem(GlobalUtils.PERMISOS_USUARIO);
        this.router.navigate(['/']);
      }
    });
  }
}