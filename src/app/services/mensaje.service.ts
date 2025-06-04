import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  private readonly objectRecibido = new BehaviorSubject<Usuario>(new Usuario());
  mensajeActual = this.objectRecibido.asObservable();

  cambiarMensaje(user: Usuario) {
    this.objectRecibido.next(user);
  }
}
