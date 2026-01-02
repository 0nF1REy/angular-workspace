import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = 'Angular v-21 Full Course';
  cityName = 'Itapeva';
  className = 'status-label-text';
  inputType = 'date';

  // function name() {

  // }

  showWelcomeMessage() {
    alert('Bem-vindo ao Angular 21!');
  }

  onStateChanged() {
    alert('Estado alterado!');
  }

  changeCourseName(text: string) {
    this.courseName = text;
  }
}
