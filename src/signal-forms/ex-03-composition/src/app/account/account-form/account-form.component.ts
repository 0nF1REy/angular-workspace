import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { Account } from './account-form.model';
import { ValidationErrorsComponent } from '../../shared/validation-errors/validation-errors.component';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
  imports: [Field, ValidationErrorsComponent],
})
export class AccountFormComponent {
  readonly form = input.required<FieldTree<Account>>();
}

