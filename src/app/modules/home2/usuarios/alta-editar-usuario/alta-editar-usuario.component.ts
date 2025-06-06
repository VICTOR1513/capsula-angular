import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../../models/usuario';
import { UsuariosService } from '../../../../services/usuarios.service';
import Swal from 'sweetalert2';

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

  validarDatos(): { valido: boolean, datos?: Usuario } {
    const { nombre, apellidoPaterno, apellidoMaterno, correo, rol } = this.user;

    // Verificar si alguno de los campos requeridos está vacío
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !correo || !rol) {
      Swal.fire({
        title: 'Datos incompletos',
        text: 'Por favor, completa todos los campos obligatorios.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return { valido: false };
    }

    // Todos los datos requeridos están presentes
    return { valido: true, datos: this.user };
  }

  guardarModificar(): void {
    const resultado = this.validarDatos();
    if (resultado.valido) {
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
        Swal.fire({title: 'Exito!', text: "Se guardo correctamente", icon: 'success', confirmButtonText: 'Aceptar'});
        //Metodo de Guardar
      }else{
        //Metodo de Modificar
        Swal.fire({title: 'Exito!', text: "Se modifico correctamente", icon: 'success', confirmButtonText: 'Aceptar'});
      }
      setTimeout(() => {
        this.router.navigate(['/menu/home2']);
      }, 3000);
      
    } else {
      this.usuarioForm.markAllAsTouched();
    }
  }
}
