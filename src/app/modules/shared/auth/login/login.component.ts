import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { GlobalUtils } from '../../../../utils/global-utils';

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
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      sessionStorage.setItem(GlobalUtils.TOKEN_KEY, environment.TOKEN);
      sessionStorage.setItem(GlobalUtils.NOMBRE_USUARIO, 'Juan Pérez');
      //Se agregan/Obtienen los permisos y roles.
      const rolesArray: string[] = ['admin', 'marketing'];
      sessionStorage.setItem(GlobalUtils.ROLES_USUARIO, JSON.stringify(rolesArray));
      const permisosArray: string[] = ['editar', 'eliminar'];
      sessionStorage.setItem(GlobalUtils.PERMISOS_USUARIO, JSON.stringify(permisosArray));
      this.router.navigate(['/menu']);
    }
  }
}
