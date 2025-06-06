import { Component } from '@angular/core';
import { Usuario } from '../../../../../models/usuario';
import { MensajeService } from '../../../../../services/mensaje.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrl: './componente-a.component.css',
})
export class ComponenteAComponent {
  user: Usuario = new Usuario();

  constructor(private readonly mensajeService: MensajeService) {}

  enviar() {
    this.mensajeService.cambiarMensaje(this.user);
  }
}
