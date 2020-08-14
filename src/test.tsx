import { Component, h, Prop } from "@stencil/core";

import { Formable } from "formable";

import { InputProperty } from "components/input";

import { validators } from "validation";
import { SelectProperty } from "components/select";
import { EditorProperty } from "components/editor";
import { CheckboxProperty } from "components/checkbox";
import { RadioProperty } from "components/radio";

@Component({
  tag: "vf-test",
})
export class ComponentInput {
  @Prop() foo: InputProperty = Formable.input({
    view: {
      id: "foo",
      label: "foo",
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
    value: "abc",
  });

  @Prop() bar: SelectProperty = Formable.select({
    view: {
      id: "bar",
      label: "bar",
      required: true,
      options: [
        { value: 1, label: "One"},
        { value: 2, label: "Two"},
      ]
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
      label: "checkbox",
      required: true,
    },
  });

  @Prop() radio: RadioProperty = Formable.radio({
    view: {
      id: "radio",
      label: "radio",
      required: true,
      options: [
        { value: "m", label: "Male" },
        { value: "f", label: "Female" },
        { value: "other", label: "Other" },
      ]
    },
    value: "m"
  });

  componentWillLoad() {
    console.log(this.foo);
    setTimeout(() => {
      this.radio.set(true);
    }, 3000);
  }

  render() {
    return (
      <div>
        <vf-input
          field={this.foo}
          onEventInput={() => (this.foo = this.foo.render())}
        ></vf-input>

        <vf-select
          field={this.bar}
          onEventChange={() => (this.bar = this.bar.render())}
        ></vf-select>

        <vf-checkbox
          field={this.checkbox}
          onEventChange={() => (this.checkbox = this.checkbox.render())}
        ></vf-checkbox>

        <vf-radio
          field={this.radio}
          onEventChange={() => (this.radio = this.radio.render())}
        ></vf-radio>

        <vf-editor
          field={this.editor}
          onEventChange={() => (this.editor = this.editor.render())}
        ></vf-editor>

        Input: {this.foo.value}
        <br/>
        Select: {this.bar.value}
        <br/>
        Editor: {this.editor.value}
        <br/>
        Checkbox: {this.checkbox.value ? "true" : "false"}
        <br/>
        Radio: {this.radio.value}
      </div>
    );
  }
}
