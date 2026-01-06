import { BatchService } from '../../core/services/batch/batch-service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Master } from '../../core/services/master/master';

@Component({
  selector: 't-batch-master',
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

  masterSr = inject(Master); // angular 16
  BatchService = inject(BatchService);

  constructor() {
    debugger;
    const courseName = this.masterSr.courseName;
    const result = this.masterSr.addTwoNum(22, 44);
  }

  ngOnInit(): void {
    this.getAllBatches();
  }

  getAllBatches() {
    debugger;
    // this.http.get('https://api.freeprojectapi.com/api/FeesTracking/batches').subscribe({
    //   next: (res: any) => {
    //     if (res.data) {
    //       this.batchList.set(res.data);
    //     } else {
    //       this.batchList.set(res);
    //     }
    //   },
    //   error: (err) => console.error('Erro ao carregar:', err),
    // });
    this.BatchService.getAllBatches().subscribe({
      next: (res: any) => {
        this.batchList.set(res.data ?? res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onEditBatch(data: Batch) {
    const stringData = JSON.stringify(data);
    const strObj = JSON.parse(stringData);
    this.newBatchObj = strObj;
  }

  onSaveBatch() {
    debugger;
    // this.http
    //   .post('https://api.freeprojectapi.com/api/FeesTracking/batches', this.newBatchObj)
    //   .subscribe({
    //     next: (result: any) => {
    //       alert('Lote criado com sucesso!');
    //       this.newBatchObj = new Batch();
    //       this.getAllBatches();
    //     },
    //     error: (error: any) => {
    //       alert('Erro ao salvar lote');
    //     },
    //   });
    this.BatchService.saveBatch(this.newBatchObj).subscribe({
      next: (res) => {
        alert('Lote criado com sucesso!');
        this.newBatchObj = new Batch();
        this.getAllBatches();
      },
      error: (err) => {
        console.error(err);
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
