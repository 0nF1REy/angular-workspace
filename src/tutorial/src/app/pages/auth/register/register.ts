import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 't-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  registerObj = {
    fullName: '',
    emailId: '',
    password: '',
  };

  onRegister() {
    console.log('Register data:', this.registerObj);
  }
}
