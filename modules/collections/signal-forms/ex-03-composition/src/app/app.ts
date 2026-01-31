import { Component } from '@angular/core';
import { ProfileFormComponent } from './sign-up/profile-form/profile-form.component';

@Component({
  selector: 'app-root',
  imports: [ProfileFormComponent],
  template: `<app-profile-form />`,
})
export class App {}
