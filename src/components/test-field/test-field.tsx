import { Component, ComponentInterface, h, State } from "@stencil/core";
import { FormGroupType, FormFieldType } from "../../types";

@Component({
  tag: "test-field",
  styleUrl: "test-field.css",
  // shadow: true,
})
export class TestField implements ComponentInterface {
  @State() form: FormGroupType;
  @State() fields: FormFieldType = {
    email: {
      type: 'input',
      options: {
        id: 'email',
        label: 'Email',
        required: true
      },
      value: 'formable@gmail.com'
    },
    password: {
      type: 'input',
      options: {
        id: 'password',
        label: 'Password',
        required: true,
        type: 'password'
      }
    }
  }

  submit() {
    console.log(this.form.getValue(), this.form);
  }

  render() {
    return (
      <formable-form form={this.form} fields={this.fields} submit={this.submit}>
        <button type="submit" class="btn btn-primary submit-button">
          Submit
        </button>
      </formable-form>
    );
  }
}
