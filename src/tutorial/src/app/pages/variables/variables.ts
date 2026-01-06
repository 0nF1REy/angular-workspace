import {
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 't-variables',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
// Decorator
export class Variables {
  // var courserName = "Angular 21";

  // string || number || boolean || date
  courseName: string = 'Angular 21';
  courseDuration = 'Esse curso possui duração de 3 meses';
  currentVersion = 'v.21';

  rollNo: number = 121;
  productPrice = 1200.5;

  isActive: boolean = false;
  isPresent = true;

  currentDate: Date = new Date();

  cityList: string[] = ['Buri', 'Guapiara', 'Itapeva'];

  rollNoArray: number[] = [111, 112, 113, 114, 115];

  studentObj = {
    name: 'Alan Ryan',
    mobile: '15996209364',
    email: 'alanryan619@gmail.com',
  };

  studentList = [
    { name: 'Rally Vincent', city: 'Buri' },
    { name: 'Minnie Hopkins', city: 'Guapiara' },
    { name: 'Becky Farrah', city: 'Itapeva' },
  ];

  constructor() {
    // this.courseName = '2233';

    this.rollNo = 234;
  }
}
