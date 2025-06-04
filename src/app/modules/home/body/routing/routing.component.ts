import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {

    constructor(private location: Location) {}

     volver(): void {
    this.location.back();
  }
}
