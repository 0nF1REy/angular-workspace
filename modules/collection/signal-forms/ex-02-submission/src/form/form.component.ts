import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  Field,
  form,
  minLength,
  required,
  submit,
  ValidationError,
} from "@angular/forms/signals";
import { SignupModel, SignupService } from "./signup.service";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [CommonModule, Field],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  protected readonly model = signal<SignupModel>({
    username: "",
    email: "",
  });

  protected readonly form = form(this.model, (s) => {
    required(s.username, { message: "Por favor, insira um nome de usuário" });
    minLength(s.username, 3, {
      message: "O nome de usuário deve ter pelo menos 3 caracteres",
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
        const errors: ValidationError.WithOptionalField[] = [];

        if (result.fieldErrors.username) {
          errors.push({
            field: f.username,
            kind: "server",
            message: result.fieldErrors.username,
          });
        }

        if (result.fieldErrors.email) {
          errors.push({
            field: f.email,
            kind: "server",
            message: result.fieldErrors.email,
          });
        }

        return errors.length ? errors : undefined;
      }

      console.log("Formulário enviado:", value);
      return undefined;
    });
  }
}
