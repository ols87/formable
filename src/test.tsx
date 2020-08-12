import { Component, h, Prop } from "@stencil/core";

import { Formable } from "formable";

import { InputProperty } from "components/input";

import { validators } from "validation";
import { SelectProperty } from "components/select";

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

  componentWillLoad() {
    console.log(this.foo);
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

        {this.foo.value}
        <br/>
        {this.bar.value}
      </div>
    );
  }
}
