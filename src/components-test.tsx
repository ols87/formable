import { Component, h, Prop, Listen } from "@stencil/core";

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

@Component({
  tag: "component-test",
})
export class ComponentTest {
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

  @Listen("fieldChange")
  update(event: CustomEvent) {
    const key = event.detail.view.id;

    this[key] = this[key].submit();
  }

  render() {
    return (
      <div>
        <vf-input field={this.input}></vf-input>
        <vf-select field={this.select}></vf-select>
        <vf-checkbox field={this.checkbox}></vf-checkbox>
        <vf-radio field={this.radio}></vf-radio>
        <vf-editor field={this.editor}></vf-editor>
        <vf-toggle field={this.toggle}></vf-toggle>
        <vf-textarea field={this.textarea}></vf-textarea>
        <vf-datepicker field={this.datepicker}></vf-datepicker>

        <table>
          <tr>
            <th>Label</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Input</td>
            <td>{this.input.value}</td>
          </tr>
          <tr>
            <td>Select</td>
            <td>{this.select.value}</td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>{this.checkbox.value ? "true" : "false"}</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td>{this.radio.value}</td>
          </tr>
          <tr>
            <td>Editor</td>
            <td>{this.editor.value}</td>
          </tr>
          <tr>
            <td>Toggle</td>
            <td>{this.toggle.value ? "true" : "false"}</td>
          </tr>
          <tr>
            <td>Textarea</td>
            <td>{this.textarea.value}</td>
          </tr>
          <tr>
            <td>Datepicker</td>
            <td>{this.datepicker.value}</td>
          </tr>
        </table>
      </div>
    );
  }
}
