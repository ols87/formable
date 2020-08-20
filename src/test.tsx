import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

import { Formable } from "./formable";

import {
  InputProperty,
  SelectProperty,
  EditorProperty,
  CheckboxProperty,
  RadioProperty,
  ToggleProperty,
  // TextareaProperty,
  // DatepickerProperty,
} from "./components/types";

import { FormProperty } from "./components/form/types/property";

@Component({
  tag: "vf-test",
})
export class ComponentInput {
  @Event({
    eventName: "formSubmit",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  todoCompleted: EventEmitter<any>;

  @Prop() input: InputProperty = Formable.input({
    view: {
      id: "input",
      label: "input",
      type: "text",
      required: true,
    },
    validators: [
      {
        match: /^(0{2}\/0{2}\/0{4})$/,
        message: "must be 00/00/0000",
      },
    ],
    lifecycle: {
      componentWillLoad: async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();

        this.input = this.input.set(data.title);
      },
    },
  });

  @Prop() select: SelectProperty = Formable.select({
    view: {
      id: "select",
      label: "select",
      required: true,
      options: [
        { value: 1, label: "One" },
        { value: 2, label: "Two" },
      ],
    },
  });

  @Prop() editor: EditorProperty = Formable.editor({
    view: {
      id: "editor",
      label: "editor",
      required: true,
    },
  });

  @Prop() checkbox: CheckboxProperty = Formable.checkbox({
    view: {
      id: "checkbox",
      label: "Checkbox",
      required: true,
    },
  });

  @Prop() toggle: ToggleProperty = Formable.toggle({
    view: {
      id: "toggle",
      label: "Toggle",
      required: true,
    },
    value: true,
  });

  @Prop() radio: RadioProperty = Formable.radio({
    view: {
      id: "radio",
      label: "Radio",
      required: true,
      options: [
        { value: "m", label: "Male" },
        { value: "f", label: "Female" },
        { value: "other", label: "Other" },
      ],
    },
    value: "m",
  });

  @Prop() formFields: FormProperty = {
    textarea: Formable.textarea({
      view: {
        id: "textarea",
        label: "Textarea",
        required: true,
        rows: 3,
      },
    }),
    datepicker: Formable.datepicker({
      view: {
        id: "datepicker",
        label: "Datepicker",
        required: true,
        format: "DD/MM/YYYY",
      },
    }),
  };

  componentDidLoad() {}

  submitType1(event) {
    let valid = true;
    const fieldList = [
      "input",
      "checkbox",
      "radio",
      "editor",
      "toggle",
      "select",
    ];

    fieldList.forEach((key) => {
      this[key].meta.submitted = true;
      this[key].touch();
      this[key] = this[key].render();

      if (!this[key].meta.valid) {
        valid = false;
      }
    });

    if (!valid) {
      return;
    }

    console.log(this.input.value);
  }

  resetType1() {
    const fieldList = [
      "input",
      "checkbox",
      "radio",
      "editor",
      "toggle",
      "select",
    ];

    fieldList.forEach((key) => {
      this[key].meta.submitted = false;
      this[key].clear();
      this[key] = this[key].render();
    });
  }

  submitType2(event, valid) {
    this.formFields = { ...this.formFields };

    if (!valid) {
      return;
    }

    console.log(this.formFields.textarea.value);
    console.log(this.formFields.datepicker.value);
  }

  resetType2() {
    this.formFields = { ...this.formFields };
  }

  render() {
    return (
      <div>
        <h1>Form Type 1</h1>
        <vf-form
          submit={(event) => this.submitType1(event)}
          reset={() => this.resetType1()}
        >
          <vf-input
            field={this.input}
            onEventInput={() => (this.input = this.input.render())}
          ></vf-input>
          <hr />
          <vf-select
            field={this.select}
            onEventChange={() => (this.select = this.select.render())}
          ></vf-select>
          <hr />
          <vf-checkbox
            field={this.checkbox}
            onEventChange={() => (this.checkbox = this.checkbox.render())}
          ></vf-checkbox>
          <hr />
          <vf-radio
            field={this.radio}
            onEventChange={() => (this.radio = this.radio.render())}
          ></vf-radio>
          <hr />
          <vf-editor
            field={this.editor}
            onEventChange={() => (this.editor = this.editor.render())}
          ></vf-editor>
          <hr />
          <vf-toggle
            field={this.toggle}
            onEventChange={() => (this.toggle = this.toggle.render())}
          ></vf-toggle>

          <button type="submit">Submit type 1</button>
          <button type="reset">Reset type 1</button>
        </vf-form>
        <br />
        Input: {this.input.value}
        <br />
        Select: {this.select.value}
        <br />
        Checkbox: {this.checkbox.value ? "true" : "false"}
        <br />
        Radio: {this.radio.value}
        <br />
        Editor: {this.editor.value}
        <br />
        Toggle: {this.toggle.value ? "true" : "false"}
        <h1>Form Type 2</h1>
        <vf-form
          fields={this.formFields}
          submit={(event, valid) => this.submitType2(event, valid)}
          reset={() => this.resetType2()}
        ></vf-form>
        Textarea: {this.formFields.textarea.value}
        <br />
        Datepicker: {this.formFields.datepicker.value}
      </div>
    );
  }
}
