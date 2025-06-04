import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { DataBindingComponent } from './body/data-binding/data-binding.component';
import { MenuComponent } from './body/menu/menu.component';
import { ComunicacionEntreComponentesComponent } from './body/comunicacion-entre-componentes/comunicacion-entre-componentes.component';
import { RoutingComponent } from './body/routing/routing.component';
import { DirectivasComponent } from './body/directivas/directivas.component';
import { UserComponent } from './body/routing/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'dataBinding', component: DataBindingComponent },
      { path: 'comunicacionEntreComponentes', component: ComunicacionEntreComponentesComponent },
      
      { path: 'routing', component: RoutingComponent },
      { path: 'user/:id', component: UserComponent },

      { path: 'directivas', component: DirectivasComponent },
      { path: '', redirectTo: 'menu', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
