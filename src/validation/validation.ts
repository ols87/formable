import { FieldProperty } from "../field/types";

import { Validator } from "./types";

export class Validation {
  public field: FieldProperty;

  constructor(field: FieldProperty) {
    this.field = field;
  }

  public check(): boolean {
    this.field.view.errors = [];

    if (!this.field.value && !this.field.submitted) return true;

    if (!this.field.touched) return true;

    if (this.field.view.required) return this.required();

    return true;
  }

  public required(): boolean {
    if (!this.field.value) {
      this.field.view.errors.push("This field is required");
      this.field.valid = false;
      return false;
    }

    if (this.field.validators) return this.validators();

    this.field.view.errors = [];
    this.field.valid = true;

    return true;
  }

  public validators(): boolean {
    let valid = true;

    if (this.field?.validators.length < 1) return valid;

    this.field.validators.forEach((validator: Validator) => {
      const isMatch = validator.match.test(this.field.value);

      if (!isMatch) this.field.view.errors.push(validator.message);

      this.field.valid = isMatch ? true : false;

      valid = this.field.valid;
    });

    return valid;
  }
}
