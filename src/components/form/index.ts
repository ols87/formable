export class FormFields {
  public fields: FormFields;

  constructor(fields: FormFields) {
    this.fields = fields;
  }

  submit(): FormFields {
    this.validate();

    return this.render();
  }

  validate(): boolean {
    let valid = true;

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key].submitted = true;
        this.fields[key].touch();
        this.fields[key] = this.fields[key].render();

        if (!this.fields[key].valid) {
          valid = false;
        }
      }
    }

    this.fields = this.render();

    return valid;
  }

  render(): FormFields {
    return new FormFields(this);
  }
}
