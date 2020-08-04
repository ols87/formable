import { Component, h, Prop } from "@stencil/core";
import { InputProperty } from "@components/input/types/input-property";

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
    events: {
      onClick: () => {
        this.setValue("foo", "yeahhhhh");
      },
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

  setValue(key: string, value: any) {
    this[key].value = value;
    this[key] = { ...this[key] };
  }

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
