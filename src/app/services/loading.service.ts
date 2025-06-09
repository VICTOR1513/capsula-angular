import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  
  private solicitudesActivas = 0;
  private readonly spinnerActivo = new BehaviorSubject<boolean>(false);
  loading$ = this.spinnerActivo.asObservable();

  mostrar(): void {
    this.solicitudesActivas++;
    if (this.solicitudesActivas === 1) {
      this.spinnerActivo.next(true);
    }
  }

  ocultar(): void {
    if (this.solicitudesActivas > 0) {
      this.solicitudesActivas--;
      if (this.solicitudesActivas === 0) {
        this.spinnerActivo.next(false);
      }
    }
  }

  reiniciar(): void {
    this.solicitudesActivas = 0;
    this.spinnerActivo.next(false);
  }
}
