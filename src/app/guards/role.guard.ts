import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {

  public router = inject(Router);

  private readonly ROLES_USUARIO = 'rolesUsuario';

  //tokenUsuario: string = '';
  //private readonly NOMBRE_USUARIO = 'nombreUsuario';


  canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
    const rolesRequeridos = route.data['roles'] as string[];
    const rolesUsuario = sessionStorage.getItem(this.ROLES_USUARIO);
    const rolesLista: string[] = rolesUsuario ? JSON.parse(rolesUsuario) : [];

    if (!rolesRequeridos || rolesRequeridos.length === 0) return true;

    const hasRole = rolesLista.some(rol => rolesRequeridos.includes(rol));
    return hasRole ? true : this.router.createUrlTree(['/menu']);
    //return !!hasRole;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean | UrlTree {
    return this.canActivate(route);
  }
}