import { Component, h, Prop } from "@stencil/core";

import { Formable } from "formable";

import { InputProperty } from "components/input/types";

@Component({
  tag: "vf-test",
})
export class ComponentInput {
  @Prop() foo: InputProperty = Formable.field({
    view: {
      id: "foo",
      label: "foo",
      type: "text",
      required: true,
    },
    validators: [
      "date",
      {
        match: /00\/00\/0000/g,
        message: "must be 00/00/0000",
      },
    ],
  });

  @Prop() bar: InputProperty = Formable.field({
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
          onEventInput={() => this.setValue()}
        ></vf-input>

        {this.foo.value}

        <vf-input
          field={this.bar}
          onEventInput={() => this.setValue()}
        ></vf-input>

        {this.bar.value}
      </div>
    );
  }
}
