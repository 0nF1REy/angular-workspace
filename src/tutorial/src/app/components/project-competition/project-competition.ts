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
    startDate: new FormControl(''),
    endDate: new FormControl(''),
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
    this.http
      .post('https://api.freeprojectapi.com/api/ProjectCompetition/competition', formValue)
      .subscribe({
        next: (result: any) => {
          alert('Competição criada com sucesso!');
        },
        error: (error: any) => {
          alert(error.error.message);
        },
      });
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
