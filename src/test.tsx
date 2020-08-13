import { Component, h, Prop } from "@stencil/core";

import { Formable } from "formable";

import { InputProperty } from "components/input";

import { validators } from "validation";
import { SelectProperty } from "components/select";

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

  componentWillLoad() {
    console.log(this.input);
  }

  render() {
    return (
      <div>
        <vf-input
          field={this.input}
          onEventInput={() => (this.input = this.input.render())}
        ></vf-input>

        {this.input.value}

        <hr />

        <vf-select
          field={this.select}
          onEventChange={() => (this.select = this.select.render())}
        ></vf-select>

        {this.select.value}
        <hr />
      </div>
    );
  }
}
