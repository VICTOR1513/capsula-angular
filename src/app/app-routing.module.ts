import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarModuloComponent } from './modules/shared/seleccionar-modulo/seleccionar-modulo.component';
import { RenderizarModuloComponent } from './modules/shared/renderizar-modulo/renderizar-modulo.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { LoginComponent } from './modules/shared/auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu', component: SeleccionarModuloComponent, data: { breadcrumb: 'Menu' }},
  { path: 'menu', data: { breadcrumb: 'Menu' }, component: RenderizarModuloComponent,
    children: [
      {
        path: 'home',
        data: { breadcrumb: 'Material de estudio Angular' },
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'home2',
        data: { breadcrumb: 'Administracion usuarios' },
        loadChildren: () => import('./modules/home2/home2.module').then((m) => m.Home2Module),
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
