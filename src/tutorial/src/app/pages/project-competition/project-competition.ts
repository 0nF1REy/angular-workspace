import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface Competition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

@Component({
  selector: 't-project-competition',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-competition.html',
  styleUrl: './project-competition.css',
})
export class ProjectCompetition implements OnInit {
  private http = inject(HttpClient);

  projectForm: FormGroup = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl('Draft'),
  });

  competitionList = signal<Competition[]>([]);

  ngOnInit() {
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.http
      .get<Competition[]>('https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition')
      .subscribe({
        next: (result) => this.competitionList.set(result),
        error: (err) => console.error('Erro ao listar:', err),
      });
  }

  saveCompetition() {
    const formValue = this.projectForm.value;

    const payload: any = {
      title: formValue.title,
      description: formValue.description,
      status: formValue.status || 'Draft',
    };

    if (formValue.startDate && formValue.startDate !== '') {
      payload.startDate = new Date(formValue.startDate).toISOString();
    }
    if (formValue.endDate && formValue.endDate !== '') {
      payload.endDate = new Date(formValue.endDate).toISOString();
    }

    this.http
      .post('https://api.freeprojectapi.com/api/ProjectCompetition/competition', payload)
      .subscribe({
        next: (result: any) => {
          alert('Competição criada com sucesso!');
          this.resetForm();
          this.getAllCompetitions();
        },
        error: (error: any) => {
          alert(error.error?.message || 'Erro ao criar competição');
        },
      });
  }

  updateCompetition() {
    const formValue = this.projectForm.value;

    const payload: any = {
      competitionId: formValue.competitionId,
      title: formValue.title,
      description: formValue.description,
      status: formValue.status,
    };

    if (formValue.startDate) {
      payload.startDate = new Date(formValue.startDate).toISOString();
    }
    if (formValue.endDate) {
      payload.endDate = new Date(formValue.endDate).toISOString();
    }

    this.http
      .put(
        `https://api.freeprojectapi.com/api/ProjectCompetition/update/${formValue.competitionId}`,
        payload
      )
      .subscribe({
        next: (result: any) => {
          alert('Competição atualizada com sucesso!');
          this.resetForm();
          this.getAllCompetitions();
        },
        error: (error: any) => {
          alert(error.error?.message || 'Erro ao atualizar');
        },
      });
  }

  deleteCompetition(id: number) {
    const isConfirmed = confirm('Tem certeza que deseja excluir?');
    if (!isConfirmed) return;

    this.http
      .delete(`https://api.freeprojectapi.com/api/ProjectCompetition/delete/${id}`)
      .subscribe({
        next: (result: any) => {
          alert('Competição deletada com sucesso!');
          this.getAllCompetitions();
        },
        error: (error: any) => {
          alert(error.error?.message || 'Erro ao deletar');
        },
      });
  }

  onEdit(item: Competition) {
    this.projectForm.patchValue({
      competitionId: item.competitionId,
      title: item.title,
      description: item.description,
      startDate: item.startDate ? item.startDate.split('T')[0] : '',
      endDate: item.endDate ? item.endDate.split('T')[0] : '',
      status: item.status,
    });
  }

  resetForm() {
    this.projectForm.reset({
      competitionId: 0,
      status: 'Draft',
    });
  }
}
