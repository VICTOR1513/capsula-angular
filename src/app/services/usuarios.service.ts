import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public usuarios: Usuario[] = [
    { id: 1, nombre: 'Diego', apellidoPaterno: 'Reyes', apellidoMaterno: 'Carrillo', correo: 'diego@prueba.com', rol: 'Admin' },
    { id: 2, nombre: 'Ana', apellidoPaterno: 'Pérez', apellidoMaterno: 'López', correo: 'ana@prueba.com', rol: 'Usuario' },
    { id: 3, nombre: 'Luis', apellidoPaterno: 'Martínez', apellidoMaterno: 'Torres', correo: 'luis@prueba.com', rol: 'Usuario' },
    { id: 4, nombre: 'María', apellidoPaterno: 'Gómez', apellidoMaterno: 'Hernández', correo: 'maria@prueba.com', rol: 'Editor' },
    { id: 5, nombre: 'Carlos', apellidoPaterno: 'Ramírez', apellidoMaterno: 'Silva', correo: 'carlos@prueba.com', rol: 'Admin' },
    { id: 6, nombre: 'Elena', apellidoPaterno: 'Morales', apellidoMaterno: 'Ríos', correo: 'elena@prueba.com', rol: 'Usuario' },
    { id: 7, nombre: 'Jorge', apellidoPaterno: 'Luna', apellidoMaterno: 'Vargas', correo: 'jorge@prueba.com', rol: 'Usuario' },
    { id: 8, nombre: 'Diana', apellidoPaterno: 'Flores', apellidoMaterno: 'Santos', correo: 'diana@prueba.com', rol: 'Editor' },
    { id: 9, nombre: 'Pedro', apellidoPaterno: 'Castro', apellidoMaterno: 'Mendoza', correo: 'pedro@prueba.com', rol: 'Usuario' },
    { id: 10, nombre: 'Lucía', apellidoPaterno: 'Reyes', apellidoMaterno: 'Ortiz', correo: 'lucia@prueba.com', rol: 'Admin' },
    { id: 11, nombre: 'Eduardo', apellidoPaterno: 'Navarro', apellidoMaterno: 'Paredes', correo: 'eduardo@prueba.com', rol: 'Usuario' },
  ];

  public getUsuarios(): Observable<{ status: string, data: Usuario[] }> {
    return of({ status: 'ok', data: this.usuarios });
  }

  public getUsuarioById(id: number): Observable<{ status: string, data: Usuario | null }> {
    const usuario = this.usuarios.find(u => u.id === id) || null;
    return of({ status: 'ok', data: usuario });
  }
}
