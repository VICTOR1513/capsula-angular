import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SeleccionarModuloComponent } from './modules/shared/seleccionar-modulo/seleccionar-modulo.component';
import { RenderizarModuloComponent } from './modules/shared/renderizar-modulo/renderizar-modulo.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SeleccionarModuloComponent,
    RenderizarModuloComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  exports: [],

  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
