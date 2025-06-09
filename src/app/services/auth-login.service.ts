import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { GlobalUtils } from '../utils/global-utils';

/*export interface User {
  id: number;
  username: string;
  email: string;
  roles: string[];
}

export interface LoginResponse {
  token: string;
  user: User;
}*/

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  //private readonly TOKEN_KEY = 'auth_token';
  //private readonly USER_KEY = 'auth_user';

  private readonly userSubject = new BehaviorSubject</*User*/any | null>(this.getStoredUser());
  user$ = this.userSubject.asObservable();

  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  iniciarSesion(/*usuario: { username: string; password: string }*/): Observable<any> {
    return this.http.get<any>(/*`${environment.URL_BASE}/auth/login`*/"http://localhost:3000/usuarios"/*, usuario*/).pipe(
      tap(response => {
        //this.storeToken(response.token);
        //this.storeUser(response.user);
        //this.userSubject.next(response.user);
        this.testSetValues();
      }),
      catchError(err => {
        this.testSetValues();
        console.log('NO HAY SERVICIO TEST: '+err);
        throw err;
      })
    );
  }

  cerrarSesion(): void {
    this.clearSession();
    this.router.navigate(['/']);
  }

  estaAutenticado(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return sessionStorage.getItem(GlobalUtils.TOKEN_KEY);
  }

  /*getUser(): User | null {
    return this.userSubject.value;
  }*/

  private storeToken(token: string): void {
    sessionStorage.setItem(GlobalUtils.TOKEN_KEY, token);
  }

  private storeUser(user: /*User*/ any): void {
    sessionStorage.setItem(GlobalUtils.USER_KEY, /*JSON.stringify(user)*/user);
  }

  private getStoredUser(): /*User*/ any | null {
    const userJson = sessionStorage.getItem(GlobalUtils.USER_KEY);
    return userJson ? /*JSON.parse(userJson)*/ userJson : null;
  }

  private clearSession(): void {
    sessionStorage.removeItem(GlobalUtils.TOKEN_KEY);
    sessionStorage.removeItem(GlobalUtils.USER_KEY);
    //this.userSubject.next(null);

    sessionStorage.removeItem(GlobalUtils.ROLES_USUARIO);
    sessionStorage.removeItem(GlobalUtils.PERMISOS_USUARIO);
  }









  testSetValues(){//REMOVER ES SOLO PARA PRUEBAS
    sessionStorage.setItem(GlobalUtils.TOKEN_KEY, environment.TOKEN);
    sessionStorage.setItem(GlobalUtils.USER_KEY, 'Juan Pérez');

    //Se agregan/Obtienen los permisos y roles.
    const rolesArray: string[] = ['admin', 'marketing'];
    sessionStorage.setItem(GlobalUtils.ROLES_USUARIO, JSON.stringify(rolesArray));
    const permisosArray: string[] = ['editar', 'eliminar'];
    sessionStorage.setItem(GlobalUtils.PERMISOS_USUARIO, JSON.stringify(permisosArray));
    this.router.navigate(['/menu']);
  }
}
