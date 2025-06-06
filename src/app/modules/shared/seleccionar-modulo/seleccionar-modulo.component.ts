import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-seleccionar-modulo',
  templateUrl: './seleccionar-modulo.component.html',
  styleUrl: './seleccionar-modulo.component.css'
})
export class SeleccionarModuloComponent {

  constructor(public authService: AuthService) {}

  private readonly ROLES_USUARIO = 'rolesUsuario';
  private readonly PERMISOS_USUARIO = 'permisosUsuario';

  checkHomeAccess(): boolean {
    //console.log("CanAccessHome: " + this.authService.canAccess(['admin'], ['editar']));
    const rolesActuales = sessionStorage.getItem(this.ROLES_USUARIO);
    const rolesListado: string[] = rolesActuales ? JSON.parse(rolesActuales) : [];

    const permisosActuales = sessionStorage.getItem(this.PERMISOS_USUARIO);
    const permisosListado: string[] = permisosActuales ? JSON.parse(permisosActuales) : [];

    return this.authService.canAccessHome(rolesListado, permisosListado);
  }
}
