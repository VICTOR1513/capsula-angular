import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {

  constructor(private readonly location: Location) {}

  hover = false;

  imagenUrl: string = 'assets/img/ejemplo1.png';

  nombre: string = 'Carlos';

  saludar() {
    alert(`Hola, ${this.nombre}`);
  }

  volver(): void {
    this.location.back();
  }
}
