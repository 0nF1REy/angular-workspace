import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { Preferences } from './preferences-form.model';

@Component({
  selector: 'app-preferences-form',
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.scss'],
  imports: [Field],
})
export class PreferencesFormComponent {
  readonly form = input.required<FieldTree<Preferences>>();
}
