import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../model/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nombre', 'correo', 'rol', 'acciones'];
  dataSource = new MatTableDataSource<Usuario>();
  filterValue = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalLength = 100; // o el total real
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(respuesta => {
      if (respuesta.status === 'ok') {
        this.dataSource.data = respuesta.data;
      }
    });
  }

  getNombreCompleto(usuario: Usuario): string {
    return `${usuario.nombre} ${usuario.apellidoPaterno} ${usuario.apellidoMaterno}`;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
  }
}
