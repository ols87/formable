import { Component, ComponentInterface, h, State } from "@stencil/core";
import { FormGroupType, FormFieldType } from "../../types";

@Component({
  tag: "test-field",
  styleUrl: "test-field.css",
  // shadow: true,
})
export class TestField implements ComponentInterface {
  @State() form: FormGroupType = {};

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
      },
      validators: {
        ip: {
          expression: (value, ctr) => /(\d{1,3}\.){3}\d{1,3}/.test(value),
          message: (value, ctr) => `${value} is not valid IP Address`
        }
      }
    },
    // description: {
    //   type: 'textarea',
    //   options: {
    //     id: 'description',
    //     label: 'Description',
    //     required: true
    //   }
    // },
    // select: {
    //   type: 'select',
    //   options: {
    //     id: 'select',
    //     label: 'Select',
    //     required: true,
    //     data: [
    //       { value: 1, label: "Select one" },
    //       { value: 2, label: "Select Two" },
    //     ],
    //   },
    // }
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form.getValue());
  }

  render() {
    return (
      <formable-form form={this.form} fields={this.fields} submit={this.submit}>
        <button type="submit" class="btn btn-primary submit-button">
          Submit
        </button>
        <button type="button" onClick={() => this.form.reset()} class="btn btn-primary submit-button">
          Reset
        </button>
      </formable-form>
    );
  }
}
