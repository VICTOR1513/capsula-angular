import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css',
})
export class DirectivasComponent {
  constructor(private readonly location: Location) {}

  volver(): void {
    this.location.back();
  }
}
