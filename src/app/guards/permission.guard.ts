import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate, CanActivateChild {

  public router = inject(Router);

  private readonly PERMISOS_USUARIO = 'permisosUsuario';

  //tokenUsuario: string = '';
  //private readonly NOMBRE_USUARIO = 'nombreUsuario';


  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const permisosRequeridos = route.data['permisos'] as string[];
    const permisosUsuario = sessionStorage.getItem(this.PERMISOS_USUARIO);
    const permisosLista: string[] = permisosUsuario ? JSON.parse(permisosUsuario) : [];

    if (!permisosRequeridos || permisosRequeridos.length === 0) return true;

    const hasPermission = permisosLista.some(permiso => permisosRequeridos.includes(permiso));
    //return !!hasPermission;
    return hasPermission ? true : this.router.createUrlTree(['/menu']);
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.canActivate(route);
  }
}