import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2.component';
import { AltaEditarUsuarioComponent } from './usuarios/alta-editar-usuario/alta-editar-usuario.component';

@NgModule({
  declarations: [
    Home2Component,
    AltaEditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    Home2RoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class Home2Module {}
