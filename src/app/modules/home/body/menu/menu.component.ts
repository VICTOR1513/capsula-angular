import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
hover = false;

  imagenUrl: string = 'assets/img/ejemplo1.png';

    nombre: string = 'Carlos';

  saludar() {
    alert(`Hola, ${this.nombre}`);
  }
}
