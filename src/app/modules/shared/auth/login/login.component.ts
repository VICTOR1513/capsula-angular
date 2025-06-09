import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { AuthServices } from '../../../../services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
    
  public nombreApp: string = environment.APP_NAME;
  loginForm!: FormGroup;
  selectedTab = 0;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authServices: AuthServices
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {


    this.authServices.iniciarSesion().subscribe({
      next: respuesta => {
        console.log('Usuario autenticado:', respuesta);
      },
      error: error => {
        console.error('Error al autenticar:', error);
      }
    });
  




      /*sessionStorage.setItem(GlobalUtils.TOKEN_KEY, environment.TOKEN);
      sessionStorage.setItem(GlobalUtils.NOMBRE_USUARIO, 'Juan Pérez');*/
      //Se agregan/Obtienen los permisos y roles.
      /*const rolesArray: string[] = ['admin', 'marketing'];
      sessionStorage.setItem(GlobalUtils.ROLES_USUARIO, JSON.stringify(rolesArray));
      const permisosArray: string[] = ['editar', 'eliminar'];
      sessionStorage.setItem(GlobalUtils.PERMISOS_USUARIO, JSON.stringify(permisosArray));
      this.router.navigate(['/menu']);*/
    }
  }
}
