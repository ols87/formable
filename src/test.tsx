import { Component, h, Prop } from "@stencil/core";
import { Formable } from "formable";
import { FormField } from "field/field";

@Component({
  tag: "vf-test",
})
export class ComponentInput {
  @Prop() foo: FormField = Formable.field({
    view: {
      id: "foo",
      label: "foo",
      type: "text",
      required: false,
    },
  });

  @Prop() bar: FormField = Formable.field({
    view: {
      id: "bar",
      label: "bar",
      type: "text",
      required: false,
    },
  });

  setValue = () => (this.foo = this.foo.controller.render());

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
