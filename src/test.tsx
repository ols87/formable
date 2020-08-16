import { Component, h, Prop } from "@stencil/core";

import { Formable } from "formable";

import { InputProperty } from "components/input";

import { validators } from "validation";
import { SelectProperty } from "components/select";
import { EditorProperty } from "components/editor";
import { CheckboxProperty } from "components/checkbox";
import { RadioProperty } from "components/radio";
import { ToggleProperty } from "components/toggle";
import { TextareaProperty } from "components/textarea";
import { DatepickerProperty } from "components/datepicker";

@Component({
  tag: "vf-test",
})
export class ComponentInput {
  @Prop() input: InputProperty = Formable.input({
    view: {
      id: "input",
      label: "input",
      type: "text",
      required: true,
    },
    validators: [
      validators.date,
      {
        match: /^(0{2}\/0{2}\/0{4})$/,
        message: "must be 00/00/0000",
      },
    ],
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
    value: true
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
      format: "DD/MM/YYYY"
    },
  });

  render() {
    return (
      <div>
        <vf-input
          field={this.input}
          onEventInput={() => (this.input = this.input.render())}
        ></vf-input>
        <vf-select
          field={this.select}
          onEventChange={() => (this.select = this.select.render())}
        ></vf-select>
        <vf-checkbox
          field={this.checkbox}
          onEventChange={() => (this.checkbox = this.checkbox.render())}
        ></vf-checkbox>
        <vf-toggle
          field={this.toggle}
          onEventChange={() => (this.toggle = this.toggle.render())}
        ></vf-toggle>
        <vf-radio
          field={this.radio}
          onEventChange={() => (this.radio = this.radio.render())}
        ></vf-radio>
        <vf-editor
          field={this.editor}
          onEventChange={() => (this.editor = this.editor.render())}
        ></vf-editor>
        <vf-textarea
          field={this.textarea}
          onEventChange={() => (this.textarea = this.textarea.render())}
        ></vf-textarea>
        <vf-datepicker
          field={this.datepicker}
          onEventChange={() => (this.datepicker = this.datepicker.render())}
        ></vf-datepicker>
        <br/>
        Input: {this.input.value}
        <br />
        Select: {this.select.value}
        <br />
        Editor: {this.editor.value}
        <br />
        Checkbox: {this.checkbox.value ? "true" : "false"}
        <br />
        Radio: {this.radio.value}
        <br/>
        Toggle: {this.toggle.value ? "true" : "false"}
        <br/>
        Textarea: {this.textarea.value}
        <br/>
        Datepicker: {this.datepicker.value}
      </div>
    );
  }
}
