import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateChild, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  public authService = inject(AuthService);
  public router = inject(Router);


  //tokenUsuario: string = '';
  private readonly TOKEN_KEY = 'accessToken';
  //private readonly NOMBRE_USUARIO = 'nombreUsuario';


  canActivate(): boolean | UrlTree {
    if(sessionStorage.getItem(this.TOKEN_KEY)){
      return true;
    }

    return this.router.createUrlTree(['']);
  }

  canActivateChild(): boolean | UrlTree {
    return this.canActivate();
  }
}