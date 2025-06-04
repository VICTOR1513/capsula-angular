import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeleccionarModuloComponent } from './modules/shared/seleccionar-modulo/seleccionar-modulo.component';
import { RenderizarModuloComponent } from './modules/shared/renderizar-modulo/renderizar-modulo.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { LoginComponent } from './modules/shared/auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // login al iniciar la app
  {
    path: 'app',
    children: [
      { path: '', component: SeleccionarModuloComponent }, // Página inicial luego del login
      {
        path: '',
        component: RenderizarModuloComponent,
        children: [
          {
            path: 'home',
            loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'home2',
            loadChildren: () => import('./modules/home2/home2.module').then((m) => m.Home2Module),
          },
        ],
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
