import { Component, h, Prop } from "@stencil/core";

import { Formable } from "formable";

import { InputProperty } from "components/input/types";
import { validators } from "validation";

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

  @Prop() bar: InputProperty = Formable.input({
    view: {
      id: "bar",
      label: "bar",
      type: "text",
      required: false,
    },
  });

  componentWillLoad() {
    console.log(this.foo);
  }

  setValue = () => {
    this.foo = this.foo.controller.render();
  };

  render() {
    return (
      <div>
        <vf-input
          field={this.foo}
          onEventInput={() => (this.foo = this.foo.controller.render())}
        ></vf-input>

        {this.foo.value}
      </div>
    );
  }
}
