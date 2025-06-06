import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private rolesHome: string[] = ['admin'];
  private permisosHome: string[] = ['editar'];

  private checkRolesHome: boolean = false;
  private checkPermisosHome: boolean = false;

  canAccessHome(roles: string[], permisos: string[]): boolean {
    this.checkRolesHome = roles.some(role => this.rolesHome.includes(role));
    this.checkPermisosHome = permisos.some(permiso => this.permisosHome.includes(permiso));
    console.log("Rol: " + this.checkRolesHome);
    console.log("Permiso: " + this.checkPermisosHome);

    return this.checkRolesHome && this.checkPermisosHome;
  }
}