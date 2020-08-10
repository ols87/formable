import { FieldProperty } from "field/types";
import { Validator } from "field/types/validation";
import { regexDate } from "./regex";

const validators = {
  date: {
    match: regexDate,
    message: "Invalid Date",
  },
};

export class Validation {
  public field: FieldProperty;

  constructor(field: FieldProperty) {
    this.field = field;
  }

  public check(): boolean {
    if (!this.field.meta.touched) return true;

    if (this.field.view.required) return this.required();

    return true;
  }

  public required(): boolean {
    if (!this.field.value) {
      this.field.view.error = "This field is required";
      this.field.meta.valid = false;
      return false;
    }

    if (this.field.validators) return this.validators();

    this.field.view.error = null;
    this.field.meta.valid = true;

    return true;
  }

  public validators(): boolean {
    let valid = true;

    this.field.validators.forEach((validator: string | Validator) => {
      const tester: Validator =
        typeof validator === "string" ? validators[validator] : validator;

      const isMatch = tester.match.test(this.field.value);

      this.field.view.error = !isMatch ? tester.message : null;

      this.field.meta.valid = isMatch ? true : false;

      valid = this.field.meta.valid;
    });

    return valid;
  }
}
