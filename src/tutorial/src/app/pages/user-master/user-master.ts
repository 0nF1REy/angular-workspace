import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-master',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-master.html',
  styleUrl: './user-master.css',
})
export class UserMaster {
  userObj = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
  };
}
