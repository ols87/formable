import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

import { Formable } from "./formable";

import {
  InputProperty,
  SelectProperty,
  EditorProperty,
  CheckboxProperty,
  RadioProperty,
  ToggleProperty,
  TextareaProperty,
  DatepickerProperty,
} from "./components/types";

import { FormProperty } from "./components/form/types";

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

  @Prop() textarea: TextareaProperty = Formable.textarea({
    view: {
      id: "textarea",
      label: "Textarea",
      required: true,
      rows: 3,
    },
  });

  @Prop() datepicker: DatepickerProperty = Formable.datepicker({
    view: {
      id: "datepicker",
      label: "Datepicker",
      required: true,
      format: "DD/MM/YYYY",
    },
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
    editor: Formable.datepicker({
      view: {
        id: "datepicker",
        label: "Datepicker",
        required: true,
      },
    }),
  };

  componentDidLoad() {}

  submit(valid: boolean) {
    this.formFields = { ...this.formFields };

    console.log(this.formFields);

    if (!valid) {
      return;
    }
  }

  reset() {
    this.formFields = { ...this.formFields };
  }

  render() {
    return (
      <div>
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
        <vf-textarea
          field={this.textarea}
          onEventInput={() => (this.textarea = this.textarea.render())}
        ></vf-textarea>
        <vf-datepicker
          field={this.datepicker}
          onEventChange={() => (this.datepicker = this.datepicker.render())}
        ></vf-datepicker>
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
        <br />
        Textarea: {this.textarea.value}
        <br />
        Datepicker: {this.datepicker.value}
        <h1>Form Type 2</h1>
        <vf-form
          fields={this.formFields}
          onEventChange={() => (this.formFields = { ...this.formFields })}
          onEventSubmit={(valid) => this.submit(valid.detail)}
          onEventReset={() => this.reset()}
        >
          <button type="submit">Submit 2</button>
          <button type="reset">Reset 2</button>
        </vf-form>
        Textarea: {this.formFields.textarea.value}
        <br />
        Editor: {this.formFields.editor.value}
      </div>
    );
  }
}
