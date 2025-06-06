import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../model/usuario';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-alta-editar-usuario',
  templateUrl: './alta-editar-usuario.component.html',
  styleUrl: './alta-editar-usuario.component.css'
})
export class AltaEditarUsuarioComponent {
  public route = inject(ActivatedRoute);
  public isAlta = false;
  public usuarioId!: number;
  user: Usuario = new Usuario();
  usuarioForm!: FormGroup;
  roles = ['Admin', 'Usuario', 'Editor'];
  public tituloPantalla = "Alta de Usuario";
  public tituloBoton = "Guardar";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: [''],
      correo: ['', [Validators.required, Validators.email]],
      rol: ['', Validators.required]
    });

    const isAltaParam = this.route.snapshot.queryParamMap.get('isAlta') ?? '';
    this.isAlta = isAltaParam === 'true';

    const idParam = this.route.snapshot.queryParamMap.get('usuarioId');
    this.usuarioId = idParam ? +idParam : 0;

    if (this.isAlta) {
      this.tituloPantalla = "Alta de Usuario";
    } else if (this.usuarioId && !isNaN(this.usuarioId)) {
      this.tituloPantalla = "Editar Usuario";
      this.tituloBoton = "Modificar";
      this.getUsuarioUpdate(this.usuarioId);
    }
  }

  getUsuarioUpdate(id: number): void {
    this.usuarioService.getUsuarioById(id).subscribe({
      next: (res) => {
        if (res.status === 'ok' && res.data) {
          this.user = res.data;
          this.usuarioForm.patchValue(this.user);
        }
      }
    });
  }

  guardarModificar(): void {
    if (this.usuarioForm.valid) {
      // Construir el objeto base desde el formulario
      const baseUsuario = {
        ...this.usuarioForm.value
      };

      // Condicionar el ID solo si es modificación
      const usuarioPayload: any = this.isAlta
        ? baseUsuario
        : { id: this.usuarioId, ...baseUsuario };

      console.log(this.isAlta ? 'Usuario registrado:' : 'Usuario actualizado:', usuarioPayload);

      if (this.isAlta) {
        //Metodo de Guardar
      }else{
        //Metodo de Modificar
      }

      this.router.navigate(['/app/home2']);
    } else {
      this.usuarioForm.markAllAsTouched();
    }
  }
}
