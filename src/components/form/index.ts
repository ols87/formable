import { FormProperty, FormClass } from "./types";
import { Formable } from "../../formable";

export class Form implements FormClass {
  public fields: FormProperty;

  public valid: boolean;

  constructor(fields: FormProperty) {
    this.fields = fields;

    for (const key in this.fields) {
      const type = this.fields[key].type;

      // Cant figure out the Type error... use any hack
      const field: any = { ...this.fields[key] };

      this.fields[key] = Formable[type](field);
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
