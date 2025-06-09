import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  
  constructor(private readonly loadingService: LoadingService) {}

  intercept(httpRequest: HttpRequest<any>,httpHandler: HttpHandler): Observable<HttpEvent<any>> {
    
    const shouldSkip = httpRequest.headers.get('omitir-carga');

    if (shouldSkip) {
      const cloned = httpRequest.clone({ headers: httpRequest.headers.delete('omitir-carga') });
      return httpHandler.handle(cloned);
    }

    this.loadingService.mostrar();

    return httpHandler.handle(httpRequest).pipe(finalize(() => this.loadingService.ocultar()));
  }
}
