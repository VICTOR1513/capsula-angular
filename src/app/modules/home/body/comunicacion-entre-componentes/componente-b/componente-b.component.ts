import { Component } from '@angular/core';
import { Usuario } from '../../../../../models/usuario';
import { MensajeService } from '../../../../../services/mensaje.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrl: './componente-b.component.css',
})
export class ComponenteBComponent {
  objectRecibido: Usuario = new Usuario();

  constructor(private readonly mensajeService: MensajeService) {}

  ngOnInit() {
    this.mensajeService.mensajeActual.subscribe(
      (data) => (this.objectRecibido = data)
    );
  }
}
