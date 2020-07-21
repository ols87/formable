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
    this.form = {
      error: null,
      touched: false,
      valid: false,
    };

    this.form.markAllTouched = () => {
      this.form.touched = true;
      this.checkValidation();
    };

    this.form.markAllUnTouched = () => {
      this.form.touched = false;
      this.markAllUbTouched();
    };

    this.form.submit = () => {
      this.form.touched = true;
      this.checkValidation();
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
    this.form.error = null

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

  markAllUbTouched() {
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

  getFieldConfigType() {
    return Object.values(this.fields).map((field: any) => {
      switch (field.type) {
        case "input":
          return <formable-input fieldConfig={field}></formable-input>;
        case "textarea":
          return <formable-textarea fieldConfig={field}></formable-textarea>;
        default:
          return <formable-input fieldConfig={field}></formable-input>;
      }
    });
  }

  render() {
    return (
      <form
        noValidate
        onSubmit={(event: any) => {
          this.onSubmit(event);
          return false;
        }}
      >
        <slot name="start"></slot>
        {this.getFieldConfigType()}
        <slot></slot>
      </form>
    );
  }
}
