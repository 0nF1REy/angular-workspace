import { Injectable } from "@angular/core";

export interface SignupModel {
  username: string;
  email: string;
}

export type SignupResult =
  | { status: "ok" }
  | {
      status: "error";
      fieldErrors: Partial<Record<keyof SignupModel, string>>;
    };

@Injectable({ providedIn: "root" })
export class SignupService {
  async signup(value: SignupModel): Promise<SignupResult> {
    await new Promise((r) => setTimeout(r, 700));

    const fieldErrors: Partial<Record<keyof SignupModel, string>> = {};

    if (value.username.trim().toLowerCase() === "brian") {
      fieldErrors.username = "Este nome de usuário já está em uso.";
    }

    if (value.email.trim().toLowerCase() === "brian@test.com") {
      fieldErrors.email = "Este e-mail já está em uso.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return { status: "error", fieldErrors };
    }

    return { status: "ok" };
  }
}
