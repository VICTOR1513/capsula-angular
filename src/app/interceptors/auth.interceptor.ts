import {HttpInterceptorFn, HttpErrorResponse} from '@angular/common/http';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {catchError, throwError} from 'rxjs';
import Swal from 'sweetalert2';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string | null = sessionStorage.getItem('accessToken');
  const router = inject(Router);

  const isMultipart = req.headers.get('enctype') === 'multipart/form-data';

  let clonedReq = req;
  if (token) {
    clonedReq = req.clone({
      setHeaders: {
       //Authorization: `Bearer ${token}`, Opción en caso de que el token este puro
        Authorization: `${token}`,
        ...(isMultipart ? {} : {'content-type': 'application/json'}),
      },
    });
  } else if (!isMultipart) {
    clonedReq = req.clone({
      setHeaders: {
        'content-type': 'application/json',
      },
    });
  }

  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 || error.status === 403) {

        Swal.fire({
          icon: 'info',
          title: 'Sesión expirada',
          text: 'Tu sesión ha expirado. Inicia sesión nuevamente.',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          router.navigate(['/autenticacion']);
        });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error inesperado. Por favor intenta nuevamente.',
          confirmButtonText: 'Aceptar',
        });
      }

      return throwError(() => error);
    })
  );
};
