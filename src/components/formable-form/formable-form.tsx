import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { FormFieldType, FormGroupType } from "../../types";

@Component({
  tag: "formable-form",
  styleUrl: "formable-form.css",
})
export class FormableForm implements ComponentInterface {
  @Prop() form: FormGroupType = {};
  @Prop() fields: FormFieldType = {};
  @Prop() submit: any = () => {};

  componentWillLoad() {
    this.form = Object.assign(this.form, {
      error: null,
      touched: false,
      valid: false,
    });

    this.form.markAllTouched = () => {
      this.form.touched = true;
      this.checkValidation();
    };

    this.form.markAllUnTouched = () => {
      this.markAllUnTouched();
    };

    this.form.submit = () => {
      this.form.touched = true;
      this.checkValidation();
    };

    this.form.reset = () => {
      this.reset();
    };

    this.form.getValue = () => {
      return this.getValue();
    };
  }

  checkValidation() {
    if (!this.form.touched) {
      return;
    }

    this.form.valid = true;
    this.form.error = null;

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        const formField = this.fields[key];

        if (formField.formControl?.submit) {
          formField.formControl.submit();
        }

        if (formField.formControl?.valid === false) {
          this.form.valid = false;
          this.form.error = {
            ...this.form.error,
            [key]: true,
          };
        }
      }
    }
  }

  markAllUnTouched() {
    this.form.touched = false;

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        const formField = this.fields[key];

        if (formField.formControl?.markUnTouched) {
          formField.formControl.markUnTouched();
        }
      }
    }
  }

  reset() {
    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        const formField = this.fields[key];

        if (formField.formControl?.reset) {
          formField.formControl.reset();
        }
      }
    }

    this.form = Object.assign(this.form, {
      error: null,
      touched: false,
      valid: false,
    });
  }

  getValue() {
    let formValue = null;

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        const formField = this.fields[key];

        if (formField.value !== undefined) {
          formValue = {
            ...formValue,
            [key]: formField.value,
          };
        }
      }
    }

    return formValue;
  }

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    this.form.submit();
    this.submit();
  }

  getFieldConfigType(field) {
    switch (field.type) {
      case "input":
        return <formable-input fieldConfig={field}></formable-input>;
      case "textarea":
        return <formable-textarea fieldConfig={field}></formable-textarea>;
      case "select":
        return <formable-select fieldConfig={field}></formable-select>;
      case "checkbox":
        return <formable-checkbox fieldConfig={field}></formable-checkbox>;
      case "radio":
        return <formable-radio fieldConfig={field}></formable-radio>;
      default:
        return <formable-input fieldConfig={field}></formable-input>;
    }
  }

  render() {
    return (
      <form noValidate onSubmit={(event: any) => { this.onSubmit(event) }}>
        <slot name="start"></slot>

        {Object.values(this.fields).map((field: any) => {
          return this.getFieldConfigType(field);
        })}

        <slot></slot>
      </form>
    );
  }
}
