import { Component, h, Prop } from "@stencil/core";

import { Formable } from "./formable";

import { FormClass } from "./components/form/types";

@Component({
  tag: "form-test",
})
export class FormTest {
  @Prop() form: FormClass = Formable.form({
    textarea: {
      type: "textarea",
      view: {
        id: "textarea",
        required: true,
        rows: 3,
      },
    },
    select: {
      type: "select",
      view: {
        id: "select",
        required: true,
        options: [
          {
            label: 1,
            value: 1,
          },
          {
            label: 2,
            value: 2,
          },
        ],
      },
    },
  });

  submit(e) {
    e.preventDefault();

    this.form.fields.template.view.options;

    this.form = this.form.submit();
  }

  reset(e) {
    e.preventDefault();

    this.form = this.form.clear();
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => this.submit(e)}
          onReset={(e) => this.reset(e)}
          novalidate
        >
          <vf-form
            form={this.form}
            onEventChange={() => (this.form = this.form.render())}
          ></vf-form>

          <button type="submit">Submit 2</button>
          <button type="reset">Reset 2</button>
        </form>
      </div>
    );
  }
}
