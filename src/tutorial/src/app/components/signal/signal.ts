import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent {
  // courseName: string = 'Angular 21';

  courseName = signal('Angular 21');
  rollNo = signal(112);
  student = signal({ name: 'Alan Ryan', city: 'Itapeva' });
  cityList = signal(['Buri', '\nGuapiara', '\nIndaiatuba', '\nItapeva']);

  courseDuration: Signal<string> = signal('3 meses');

  constructor() {
    console.log('Antes - ' + this.courseName());
    setTimeout(() => {
      this.courseName.set('React Js');
      console.log('Depois - ' + this.courseName());
    }, 3000);
  }

  changeCourse() {
    this.courseName.set('Java');
  }
}
