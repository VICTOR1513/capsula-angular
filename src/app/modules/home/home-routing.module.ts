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
      { path: 'menuCapsula', component: MenuComponent/*, data: { breadcrumb: 'Menu Capsula'}*/},
      { path: 'dataBinding', component: DataBindingComponent, data: { breadcrumb: ' Data Binding en Angular - Conceptos Básicos' }},
      { path: 'comunicacionEntreComponentes', component: ComunicacionEntreComponentesComponent, data: { breadcrumb: 'Comunicación entre Componentes en Angular - Conceptos Básicos'} },
      
      { path: 'routing', component: RoutingComponent, data: { breadcrumb: 'Routing en Angular - Conceptos Básicos'}},
      { path: 'user/:id', component: UserComponent , data: { breadcrumb: 'Usuario'}},

      { path: 'directivas', component: DirectivasComponent, data: { breadcrumb: 'Directivas en Angular - Conceptos Básicos'}},
      { path: '', redirectTo: 'menuCapsula', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
