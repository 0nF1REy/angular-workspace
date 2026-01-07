import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { ConfirmacaoDialogoComponent } from '../../../components/confirmacao-dialogo/confirmacao-dialogo.component';

@Component({
  selector: 'app-filter-users',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './filter-users.component.html',
  styleUrl: './filter-users.component.css',
})
export class FilterUsersComponent implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly userService = inject(UsuariosService);
  private readonly router = inject(Router);

  nomesColunas: string[] = [];
  dadosUsuarios: any[] = [];

  ngOnInit(): void {
    this.listar();
  }

  sexoUsuario(usuario: any): string {
    return usuario.sexo === 'm'
      ? 'Masculino'
      : usuario.sexo === 'f'
        ? 'Feminino'
        : 'Não informado';
  }

  async listar(): Promise<void> {
    const usuarios = await this.userService.exibirTodos();
    this.dadosUsuarios = [];

    if (usuarios && usuarios.length > 0) {
      usuarios.forEach((usuario: any) => this.dadosUsuarios.push(usuario));
    }

    this.nomesColunas = ['nome', 'idade', 'sexo', 'email', 'operações'];
  }

  async excluir(usuario: any): Promise<void> {
      await this.userService.excluirUsuario(usuario);
      this.listar();
  }

  editar(usuario: any): void {
    this.userService.salvarUsuarioTemporario(usuario);
    this.router.navigateByUrl('/admin/edita-usuarios');
  }

  confirmarExclusao(usuario: any): void {
    this.dialog.open(ConfirmacaoDialogoComponent, {
      width: 'fit-content',
      data: usuario,
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    }
    ).afterClosed().subscribe({
      next: (confirmou: boolean) => confirmou ? this.excluir(usuario) : null
    });
  }
}
