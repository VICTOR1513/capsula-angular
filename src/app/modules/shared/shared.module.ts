import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

// Componentes compartidos
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { BarraNavegacionalComponent } from './barra-navegacional/barra-navegacional.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {AlertComponent} from './alert/alert.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { LoadingInterceptor } from '../../interceptors/loading.interceptor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { LoadingInterceptor } from '../../interceptors/loading.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    BarraNavegacionalComponent,
    AlertComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    BarraNavegacionalComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    AlertComponent,
    LoadingSpinnerComponent
  ],
    providers: [
    provideHttpClient(withInterceptorsFromDi()),

    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
})
export class SharedModule {}
