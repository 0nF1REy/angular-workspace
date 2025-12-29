import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'project-competition',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competition.html',
  styleUrl: './project-competition.css',
})
export class ProjectCompetition {
  projectForm: FormGroup = new FormGroup({
    competitionId: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(null),
    endDate: new FormControl(null),
    status: new FormControl(''),
  });

  http = inject(HttpClient);

  competitionList = signal<Competition[]>([]);

  constructor() {
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.http
      .get('https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition')
      .subscribe({
        next: (result: any) => {
          this.competitionList.set(result);
        },
      });
  }

  saveCompetition() {
    const formValue = this.projectForm.value;

    const payload: any = {
      title: formValue.title,
      description: formValue.description,
      status: formValue.status || 'Draft',
    };

    if (formValue.startDate) {
      payload.startDate = new Date(formValue.startDate).toISOString();
    }
    if (formValue.endDate) {
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
          alert(error.error.message);
        },
      });
  }

  resetForm() {
    this.projectForm.reset();
  }
}

export interface Competition {
  competitionId: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}
