import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 't-future-register',
  imports: [FormsModule],
  templateUrl: './future-register.html',
  styleUrl: './future-register.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FutureRegister {
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
