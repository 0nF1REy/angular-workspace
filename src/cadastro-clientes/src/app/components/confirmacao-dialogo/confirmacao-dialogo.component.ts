import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-dialogo',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './confirmacao-dialogo.component.html',
  styleUrl: './confirmacao-dialogo.component.css',
})
export class ConfirmacaoDialogoComponent {
  private readonly data = inject(MAT_DIALOG_DATA);
  usuario: any = this.data ?? { nome: 'Usuário Teste' };

  confirmar(valor: boolean) {
    return valor;
  }
}
