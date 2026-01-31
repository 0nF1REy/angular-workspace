import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-tela-mensagem',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './tela-mensagem.component.html',
  styleUrl: './tela-mensagem.component.css',
})
export class TelaMensagemComponent {
  @Output() okClicked = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { titulo: string; mensagem: string },
    private dialogRef: MatDialogRef<TelaMensagemComponent>
  ) {}

  onOkClick(): void {
    this.okClicked.emit();
    this.dialogRef.close();
  }
}
