import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'batch-master',
  imports: [FormsModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {
  newBatchObj: Batch = new Batch();
  http = inject(HttpClient);

  onSaveBatch() {
    debugger;
    this.http
      .post('https://api.freeprojectapi.com/api/FeesTracking/batches', this.newBatchObj)
      .subscribe({
        next: (result: any) => {
          debugger;
        },
        error: (error: any) => {
          debugger;
          alert('Lote criado com sucesso!');
        },
      });
  }
}

class Batch {
  batchId: number;
  batchName: string;
  createdDate: Date;

  constructor() {
    this.batchId = 0;
    this.batchName = '';
    this.createdDate = new Date();
  }
}
