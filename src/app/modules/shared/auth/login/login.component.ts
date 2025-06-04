import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  selectedTab = 0;
  private readonly TOKEN_KEY = 'accessToken';
  private readonly NOMBRE_USUARIO = 'nombreUsuario';

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
      sessionStorage.setItem(this.TOKEN_KEY, environment.TOKEN);
      sessionStorage.setItem(this.NOMBRE_USUARIO, 'Juan Pérez');
      this.router.navigate(['/app']);
    }
  }
}
