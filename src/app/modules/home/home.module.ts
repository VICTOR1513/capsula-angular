import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BodyComponent } from './body/body.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DataBindingComponent } from './body/data-binding/data-binding.component';
import { MenuComponent } from './body/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DataBindingCardComponent } from './body/data-binding/data-binding-card/data-binding-card.component';
import { ComunicacionEntreComponentesComponent } from './body/comunicacion-entre-componentes/comunicacion-entre-componentes.component';
import { RoutingComponent } from './body/routing/routing.component';
import { DirectivasComponent } from './body/directivas/directivas.component';
import { CardComponent } from './body/comunicacion-entre-componentes/card/card.component';
import { ResaltarDirective } from '../../directives/resaltar.directive';
import { ComponenteAComponent } from './body/comunicacion-entre-componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './body/comunicacion-entre-componentes/componente-b/componente-b.component';
import { UserComponent } from './body/routing/user/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BodyComponent,
    DataBindingComponent,
    MenuComponent,
    DataBindingCardComponent,
    ComunicacionEntreComponentesComponent,
    RoutingComponent,
    DirectivasComponent,
    CardComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ResaltarDirective,
    UserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    SharedModule 
  ]
})
export class HomeModule { }
