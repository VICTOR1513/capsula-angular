import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  public nombreUsuario: string = 'Administrador';
  public isLoggedIn: boolean = false;
  private readonly TOKEN_KEY = 'accessToken';
  private readonly NOMBRE_USUARIO = 'nombreUsuario';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem(this.TOKEN_KEY);
    if (token) {
      this.isLoggedIn = true;
      this.nombreUsuario = sessionStorage.getItem(this.NOMBRE_USUARIO) ?? '';
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
        sessionStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/']);
      }
    });
  }
  
}