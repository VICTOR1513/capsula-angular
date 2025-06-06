import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2.component';
import { AltaEditarUsuarioComponent } from './usuarios/alta-editar-usuario/alta-editar-usuario.component';

const routes: Routes = [
  { path: '', component: Home2Component },
  { path: 'alta-editar-usuario', component: AltaEditarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Home2RoutingModule { }
