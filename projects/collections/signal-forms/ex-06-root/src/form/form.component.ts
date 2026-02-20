import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormField,
  form,
  minLength,
  required,
  submit,
  ValidationError,
} from "@angular/forms/signals";
// import { FormField, FormRoot, form, minLength, required, ValidationError } from '@angular/forms/signals';
import { SignupModel, SignupService } from "./signup.service";

const INITIAL_VALUES: SignupModel = {
  username: "",
  email: "",
};

@Component({
  selector: "app-form",
  imports: [CommonModule, FormField],
  //   imports: [CommonModule, FormField, FormRoot],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  protected readonly model = signal<SignupModel>(INITIAL_VALUES);

  // protected readonly form = form(
  // 	this.model,
  // 	s => {
  // 		required(s.username, { message: 'Por favor, insira um nome de usuário' });
  // 		minLength(s.username, 3,
  // 			{ message: 'Seu nome de usuário deve ter pelo menos 3 caracteres' });
  // 		required(s.email, { message: 'Por favor, insira um endereço de e-mail' });
  // 	},
  // 	{
  // 		submission: {
  // 			action: async f => {
  // 				const value = f().value();
  // 				const result = await this.signupService.signup(value);

  // 				if (result.status === 'error') {
  // 					const errors: ValidationError.WithOptionalFieldTree[] = [];

  // 					if (result.fieldErrors.username) {
  // 						errors.push({
  // 							fieldTree: f.username,
  // 							kind: 'server',
  // 							message: result.fieldErrors.username,
  // 						});
  // 					}

  // 					if (result.fieldErrors.email) {
  // 						errors.push({
  // 							fieldTree: f.email,
  // 							kind: 'server',
  // 							message: result.fieldErrors.email,
  // 						});
  // 					}

  // 					return errors.length ? errors : undefined;
  // 				}

  // 				console.log('Formulário Tocado (Dirty):', this.form().dirty());
  // 				console.log('Valor do Formulário:', this.form().value());
  // 				console.log('Modelo do Formulário:', this.model());

  // 				this.form().reset();
  // 				// f().reset(INITIAL_VALUES);

  // 				console.log('Formulário Tocado (Dirty):', this.form().dirty());
  // 				console.log('Valor do Formulário:', this.form().value());
  // 				console.log('Modelo do Formulário:', this.model());

  // 				return undefined;
  // 			},
  // 		},
  // 	},
  // );

  protected readonly form = form(this.model, (s) => {
    required(s.username, { message: "Por favor, insira um nome de usuário" });
    minLength(s.username, 3, {
      message: "Seu nome de usuário deve ter pelo menos 3 caracteres",
    });
    required(s.email, { message: "Por favor, insira um endereço de e-mail" });
  });

  private readonly signupService = inject(SignupService);

  protected onSubmit(event: Event) {
    event.preventDefault();

    submit(this.form, async (f) => {
      const value = f().value();
      const result = await this.signupService.signup(value);

      if (result.status === "error") {
        const errors: ValidationError.WithOptionalFieldTree[] = [];

        if (result.fieldErrors.username) {
          errors.push({
            fieldTree: f.username,
            kind: "server",
            message: result.fieldErrors.username,
          });
        }

        if (result.fieldErrors.email) {
          errors.push({
            fieldTree: f.email,
            kind: "server",
            message: result.fieldErrors.email,
          });
        }

        return errors.length ? errors : undefined;
      }

      console.log("Formulário Tocado (Dirty):", this.form().dirty());
      console.log("Valor do Formulário:", this.form().value());
      console.log("Modelo do Formulário:", this.model());
      return undefined;
    });
  }
}
