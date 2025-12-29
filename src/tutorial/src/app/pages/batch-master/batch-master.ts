import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'batch-master',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster implements OnInit {
  // Estado reativo da lista de lotes
  batchList = signal<Batch[]>([]);

  newBatchObj: Batch = new Batch();
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllBatches();
  }

  getAllBatches() {
    this.http.get('https://api.freeprojectapi.com/api/FeesTracking/batches').subscribe({
      next: (res: any) => {
        if (res.data) {
          this.batchList.set(res.data);
        } else {
          this.batchList.set(res);
        }
      },
      error: (err) => console.error('Erro ao carregar:', err),
    });
  }

  onEditBatch(data: Batch) {
    const stringData = JSON.stringify(data);
    const strObj = JSON.parse(stringData);
    this.newBatchObj = strObj;
  }

  onSaveBatch() {
    this.http
      .post('https://api.freeprojectapi.com/api/FeesTracking/batches', this.newBatchObj)
      .subscribe({
        next: (result: any) => {
          alert('Lote criado com sucesso!');
          this.newBatchObj = new Batch();
          this.getAllBatches();
        },
        error: (error: any) => {
          alert('Erro ao salvar lote');
        },
      });
  }

  onUpdateBatch() {
    this.http
      .put(
        'https://api.freeprojectapi.com/api/FeesTracking/batches/' + this.newBatchObj.batchId,
        this.newBatchObj
      )
      .subscribe({
        next: (result: any) => {
          alert('Lote atualizado com sucesso!');
          this.newBatchObj = new Batch();
          this.getAllBatches();
        },
        error: (error: any) => {
          alert('Erro ao atualizar lote');
        },
      });
  }

  onDeleteBatch(id: number) {
    const isConfirmed = confirm('Tem certeza que deseja excluir?');
    if (isConfirmed == true) {
      this.http.delete('https://api.freeprojectapi.com/api/FeesTracking/batches/' + id).subscribe({
        next: (result: any) => {
          alert('Lote deletado com sucesso!');
          this.newBatchObj = new Batch();
          this.getAllBatches();
        },
        error: (error: any) => {
          alert('Erro ao deletar lote');
        },
      });
    }
  }
}

class Batch {
  batchId: number = 0;
  batchName: string = '';
  createdDate: string = new Date().toISOString().split('T')[0];
}
