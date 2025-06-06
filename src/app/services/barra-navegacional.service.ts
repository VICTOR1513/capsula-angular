import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { BarraNavegacional } from '../models/barra-navegacional';

@Injectable({ providedIn: 'root' })
export class BarraNavegacionalService {
  
  private readonly breadcrumbs$ = new BehaviorSubject<BarraNavegacional[]>([]);
  
  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged()
    ).subscribe(() => {
      this.updateBreadcrumbs();
    });
  }

  getBreadcrumbs() {
    return this.breadcrumbs$.asObservable();
  }

  private updateBreadcrumbs() {
    const root = this.router.routerState.snapshot.root;
    const breadcrumbs = this.buildBreadCrumb(root);
    this.breadcrumbs$.next(breadcrumbs);
  }

  private buildBreadCrumb(route: ActivatedRouteSnapshot, parentUrl: string = '', breadcrumbs: BarraNavegacional[] = []): BarraNavegacional[] {
    if (!route) return breadcrumbs;

    try {
      // 1. Obtener segmentos de la ruta actual
      const segments = route.url.map(segment => segment.path);
      
      // 2. Construir URL base para esta ruta
      const currentPath = segments.join('/');
      const currentUrl = parentUrl + currentPath;
      
      // 3. Normalizar URL para breadcrumb (sin barra final, con barra inicial)
      let normalizedUrl = currentUrl;
      
      // Asegurar que comience con '/'
      if (normalizedUrl && !normalizedUrl.startsWith('/')) {
        normalizedUrl = '/' + normalizedUrl;
      }
      
      // Eliminar barras duplicadas (ej: '//admin' -> '/admin')
      normalizedUrl = normalizedUrl.replace(/\/\/+/g, '/');
      
      // Eliminar barra final si existe
      normalizedUrl = normalizedUrl.endsWith('/') ? 
          normalizedUrl.slice(0, -1) : 
          normalizedUrl;
      
      // Manejar caso especial para raíz
      if (normalizedUrl === '') normalizedUrl = '/';

      // 4. Preparar URL para rutas hijas (con barra final)
      let nextUrlWithSlash = normalizedUrl;
      
      // Solo agregar barra si no es la raíz
      if (nextUrlWithSlash !== '/') {
        nextUrlWithSlash = nextUrlWithSlash.endsWith('/') ? 
            nextUrlWithSlash : 
            nextUrlWithSlash + '/';
      }

      // 5. Obtener label del breadcrumb - SOLO si existe la propiedad
      const breadcrumbLabel = this.getBreadcrumbLabel(route);

      // 6. Agregar breadcrumb SOLO si tiene propiedad breadcrumb definida
      if (breadcrumbLabel && breadcrumbLabel.trim() !== '') {
        const breadcrumb: BarraNavegacional = {
          label: breadcrumbLabel,
          url: normalizedUrl
        };
        
        // Evitar duplicados y rutas vacías
        const isDuplicate = breadcrumbs.some(bc => bc.url === breadcrumb.url);
        const isRootDuplicate = normalizedUrl === '/' && breadcrumbs.length > 0;
        
        if (!isDuplicate && !isRootDuplicate) {
          breadcrumbs.push(breadcrumb);
        }
      }

      // 7. Procesar rutas hijas recursivamente
      if (route.firstChild) {
        return this.buildBreadCrumb(route.firstChild, nextUrlWithSlash, breadcrumbs);
      }

      return breadcrumbs;
    } catch (error) {
      console.error(error);
      return breadcrumbs;
    }
  }

  private getBreadcrumbLabel(route: ActivatedRouteSnapshot): string {
    const data = route.data;
    
    // MODIFICACIÓN CLAVE: Solo devolver label si existe propiedad breadcrumb
    if (data && data['breadcrumb']) {
      if (typeof data['breadcrumb'] === 'function') {
        return data['breadcrumb'](route) ?? '';
      }
      return data['breadcrumb'] ?? '';
    }
    
    // Si no hay breadcrumb definido, devolver cadena vacía
    return '';
  }
}