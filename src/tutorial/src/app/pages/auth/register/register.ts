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
    firstName: '',
    lastName: '',
    username: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  };

  onRegister() {
    console.log('Register data:', this.registerObj);
  }
}
