import { Component, h, Prop, State } from "@stencil/core";
import { InputProperty } from "@components/input/types/input-property";
import { setValue } from "field/utils/controller";

@Component({
  tag: "vf-test",
})
export class ComponentInput {
  @Prop() foo: InputProperty = {
    render: {
      id: "foo",
      label: "foo",
      type: "text",
      required: false,
    },
  };

  @Prop() bar: InputProperty = {
    render: {
      id: "bar",
      label: "bar",
      type: "text",
      required: false,
    },
  };

  @State() setValue: Function = setValue.bind(this);

  render() {
    return (
      <div>
        <vf-input
          field={this.foo}
          onEventInput={(event: CustomEvent) =>
            this.setValue("foo", event.detail.value)
          }
        ></vf-input>

        {this.foo.value}

        <vf-input
          field={this.bar}
          onEventInput={(event: CustomEvent) =>
            this.setValue("bar", event.detail.value)
          }
        ></vf-input>

        {this.bar.value}
      </div>
    );
  }
}
