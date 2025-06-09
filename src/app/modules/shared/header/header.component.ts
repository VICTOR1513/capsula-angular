import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GlobalUtils } from '../../../utils/global-utils';
import { environment } from '../../../../environments/environment';
import { AuthServices } from '../../../services/auth-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  public nombreApp: string = environment.APP_NAME;
  public nombreUsuario: string = 'Administrador';

  constructor(private readonly router: Router,public authServices :AuthServices) {}

  ngOnInit(): void {
    if (this.authServices.estaAutenticado()) {
      this.nombreUsuario = sessionStorage.getItem(GlobalUtils.USER_KEY) ?? '';
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
        //sessionStorage.removeItem(GlobalUtils.TOKEN_KEY);
        //sessionStorage.removeItem(GlobalUtils.USER_KEY);

        //sessionStorage.removeItem(GlobalUtils.ROLES_USUARIO);
        //sessionStorage.removeItem(GlobalUtils.PERMISOS_USUARIO);
        //this.router.navigate(['/']);
        this.authServices.cerrarSesion();
      }
    });
  }
}