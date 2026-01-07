import * as bcrypt from 'bcryptjs';

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { TelaMensagemComponent } from '../../../components/tela-mensagem/tela-mensagem.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cad-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './cad-user.component.html',
  styleUrl: './cad-user.component.css',
})
export class CadUserComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confSenha: string = '';
  sexo: string = '';
  idade: string = '';

  isCadastro: boolean = true;
  textoBotao: string = '';
  classeBotao: string = '';

  usuario: any | undefined = undefined;
  usuarioOriginal: any | undefined = undefined;

  senhaAtual: string = '';

  readonly DIALOG = inject(MatDialog);
  private readonly userService = inject(UsuariosService);
  private readonly router = inject(Router);

  async ngOnInit(): Promise<void> {
    this.usuario = this.userService.getUsuarioTemporario();
    this.isCadastro = !(this.usuario && this.usuario.id);

    this.textoBotao = this.isCadastro ? 'Salvar' : 'Atualizar';
    this.classeBotao = this.isCadastro ? 'salvar' : 'atualizar';

    if (!this.isCadastro && this.usuario) {
      try {
        const usuarioCompleto = await this.userService.getUsuarioCompleto(
          this.usuario.id
        );

        if (usuarioCompleto) {
          this.preencherFormulario(usuarioCompleto);
          this.usuario = usuarioCompleto;
          this.usuarioOriginal = { ...usuarioCompleto };
        } else {
          console.error('Usuário não encontrado!');
          this.exibirMensagem('Erro', 'Usuário não encontrado.');
          this.router.navigateByUrl('/admin/pesquisa-usuarios');
          return;
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        this.exibirMensagem('Erro', 'Erro ao buscar informações do usuário.');
        this.router.navigateByUrl('/admin/pesquisa-usuarios');
        return;
      }
    } else if (this.isCadastro) {
    }
  }

  async salvar() {
    if (!this.isFormValido()) {
      this.exibirMensagem(
        'Erro',
        'Por favor, preencha todos os campos obrigatórios.'
      );
      return;
    }

    if (!this.houveAlteracoes()) {
      this.exibirMensagem('Informação', 'Nenhuma alteração detectada.');
      return;
    }

    let senhaParaSalvar = this.usuario?.senha || '';
    if (this.senha && this.confSenha) {
      if (!this.validarSenhasIguais()) {
        this.exibirMensagem(
          'Erro na Senha',
          'Por favor, verifique se as senhas estão iguais!'
        );
        return;
      }

      if (!this.isCadastro) {
        if (!this.senhaAtual || this.senhaAtual.trim() === '') {
          this.exibirMensagem(
            'Erro',
            'Informe sua senha atual para alterá-la.'
          );
          return;
        }

        if (!this.usuarioOriginal?.senha) {
          this.exibirMensagem(
            'Erro',
            'Senha original não encontrada para validação.'
          );
          return;
        }

        try {
          const senhaCorreta = bcrypt.compareSync(
            this.senhaAtual,
            this.usuarioOriginal.senha
          );

          if (!senhaCorreta) {
            this.exibirMensagem('Erro', 'A senha atual está incorreta.');
            return;
          }
        } catch (error) {
          console.error('Erro ao comparar senhas:', error);
          this.exibirMensagem(
            'Erro',
            'Ocorreu um erro ao validar a senha atual.'
          );
          return;
        }
      }

      const salt = bcrypt.genSaltSync(10);
      senhaParaSalvar = bcrypt.hashSync(this.senha, salt);
    }

    const userData = {
      nome: this.nome.trim(),
      email: this.email.trim(),
      senha: senhaParaSalvar,
      sexo: this.sexo,
      idade: this.idade,
    };

    try {
      let resp: string;
      if (this.isCadastro) {
        resp = await this.userService.adicionarUsuario(userData);
      } else {
        await this.userService.editarUsuario({
          id: this.usuario.id,
          ...userData,
        });
        resp = `Usuário(a) ${this.usuarioOriginal.nome} alterado(a) com sucesso!`;
      }
      const dialogRef = this.DIALOG.open(TelaMensagemComponent, {
        width: 'fit-content',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: { titulo: 'Sucesso', mensagem: resp },
      });

      dialogRef.afterClosed().subscribe(() => {
        this.limpar();
        if (!this.isCadastro) {
          this.router.navigateByUrl('/admin/pesquisa-usuarios');
        }
      });
    } catch (error: any) {
      console.error('Erro detalhado ao salvar usuário:', error);
      this.exibirMensagem(
        'Erro',
        error.message || 'Ocorreu um erro ao salvar o usuário.'
      );
    }
  }

  private houveAlteracoes(): boolean {
    if (!this.usuarioOriginal) return true;

    return (
      this.nome !== this.usuarioOriginal.nome ||
      this.email !== this.usuarioOriginal.email ||
      this.sexo !== this.usuarioOriginal.sexo ||
      this.idade !== this.usuarioOriginal.idade ||
      !!(this.senha && this.senha.length > 0)
    );
  }

  private async salvarUsuario(senhaParaSalvar: string) {
    const userData = {
      nome: this.nome,
      email: this.email,
      senha: senhaParaSalvar,
      sexo: this.sexo,
      idade: this.idade,
    };

    try {
      let resp: string;
      if (this.isCadastro) {
        resp = await this.userService.adicionarUsuario(userData);
      } else {
        await this.userService.editarUsuario({
          id: this.usuario.id,
          ...userData,
        });
        resp = `Usuário(a) ${this.usuarioOriginal.nome} alterado(a) com sucesso!`;
      }
      this.exibirMensagem('Sucesso', resp);
    } catch (error: any) {
      console.error('Erro detalhado ao salvar usuário:', error);
      this.exibirMensagem(
        'Erro',
        error.message || 'Ocorreu um erro ao salvar o usuário.'
      );
    }
  }

  validarSenhasIguais(): boolean {
    return this.senha.localeCompare(this.confSenha) === 0;
  }

  exibirMensagem(titulo: string, mensagem: string) {
    const dialogRef = this.DIALOG.open(TelaMensagemComponent, {
      width: 'fit-content',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: { titulo, mensagem },
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  isSenhasPreenchidas(): boolean {
    return (
      (this.senha ?? '').trim().length > 0 &&
      (this.confSenha ?? '').trim().length > 0
    );
  }

  preencherFormulario(usuario: any) {
    this.nome = usuario.nome;
    this.idade = usuario.idade;
    this.sexo = usuario.sexo;
    this.email = usuario.email;
  }

  limpar() {
    this.nome = '';
    this.idade = '';
    this.sexo = '';
    this.senha = '';
    this.confSenha = '';
    this.email = '';

    if (!this.isCadastro) {
      this.router.navigateByUrl('/admin/pesquisa-usuarios');
    }
  }

  isFormValido(): boolean {
    const idadeStr = String(this.idade ?? '');

    return (
      !!(this.nome ?? '').trim() &&
      !!(this.email ?? '').trim() &&
      !!(this.sexo ?? '').trim() &&
      !!idadeStr.trim() &&
      (this.isCadastro ||
        (!this.isCadastro &&
          !!(this.senha ?? '').trim() &&
          !!(this.confSenha ?? '').trim())) &&
      this.validarSenhasIguais()
    );
  }
}
