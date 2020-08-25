import { FormProperty, FormClass } from "./types";
import { Formable } from "formable";

export class Form implements FormClass {
  public fields: FormProperty;

  public valid: boolean;

  constructor(fields: FormProperty) {
    this.fields = fields;

    for (const key in this.fields) {
      const type = this.fields[key].type;

      this.fields[key] = Formable[type](this.fields[key]);
    }

    this.valid = this.validate();
  }

  submit(): FormClass {
    this.validate();

    for (const field in this.fields) {
      this.fields[field].touch();

      this.fields[field].submit();

      this.fields[field] = this.fields[field].render();
    }

    return this.render();
  }

  clear(): FormClass {
    for (const field in this.fields) {
      this.fields[field].clear();

      this.fields[field] = this.fields[field].render();
    }

    return this.render();
  }

  validate(): boolean {
    this.valid = true;

    for (const field in this.fields) {
      this.fields[field] = this.fields[field].render();

      if (!this.fields[field].valid) {
        this.valid = false;
      }
    }

    return this.valid;
  }

  render(): FormClass {
    this.validate();

    return new Form(this.fields);
  }
}
