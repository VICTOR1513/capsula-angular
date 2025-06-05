import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../../../models/usuario';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  
  @Input() title!: string;
  @Input() icon!: string;
  @Input() iconColor!: string;
  @Input() borderColor!: string;
  @Input() bgColor!: string;
  @Input() description!: string;
  @Input() note!: string;
  @Input() extraContent?: string;
  @Input() link?: string;
  @Input() linkText?: string;
  @Input() mostrarBoton = false;

  @Output() evento = new EventEmitter<string>();
  @Output() eventoObject = new EventEmitter<Usuario>();

  enviarEvento() {
    this.evento.emit('¡Hola desde el componente hijo!');
  }

  enviarEventoObject() {
    let user: Usuario = new Usuario();
    user.nombre = "Victor";
    user.apellidoPaterno = "Salazar";
    user.apellidoMaterno = "Cruz";
    this.eventoObject.emit(user);
  }
}
