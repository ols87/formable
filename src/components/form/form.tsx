import { Component, ComponentInterface, h, Prop, Element } from "@stencil/core";
import { FormProperty } from "./types/property";

@Component({
  tag: "vf-form",
})
export class FormableForm implements ComponentInterface {
  @Prop() autoRender: boolean = false;
  @Prop() fields: FormProperty = {};
  @Prop() submit: any = () => {};
  @Prop() reset: any = () => {};
  @Element() el: HTMLElement;

  componentWillLoad() {}

  onReset(event) {
    event.stopPropagation();
    event.preventDefault();

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key].meta.submitted = false;
        this.fields[key].clear();
        this.fields[key] = this.fields[key].render();
      }
    }

    this.fields = { ...this.fields };
    this.reset(event);
  }

  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    let valid = true;

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key].meta.submitted = true;
        this.fields[key].touch();
        this.fields[key] = this.fields[key].render();

        if (!this.fields[key].meta.valid) {
          valid = false;
        }
      }
    }

    this.submit(event, valid);
  }

  renderSlot() {
    return Object.keys(this.fields ?? {}).map((key) => {
      return <slot name={key}></slot>;
    });
  }

  getFieldConfigType() {
    console.log(this.fields);

    if (!this.autoRender) {
      return;
    }

    return Object.keys(this.fields ?? {}).map((key: any) => {
      const field = this.fields[key];

      switch (field.constructor.name) {
        case "InputField":
          return <vf-input field={field}></vf-input>;
        case "TextareaField":
          return <vf-textarea field={field}></vf-textarea>;
        case "SelectField":
          return <vf-select field={field}></vf-select>;
        case "CheckboxField":
          return <vf-checkbox field={field}></vf-checkbox>;
        case "RadioField":
          return <vf-radio field={field}></vf-radio>;
        case "ToggleField":
          return <vf-toggle field={field}></vf-toggle>;
        case "EditorField":
          return <vf-editor field={field}></vf-editor>;
        case "DatepickerField":
          return <vf-datepicker field={this.fields[key]}></vf-datepicker>;
        default:
          return <vf-input field={field}></vf-input>;
      }
    });
  }

  render() {
    return (
      <form
        noValidate
        onSubmit={(event: any) => {
          this.onSubmit(event);
        }}
        onReset={(event: any) => {
          this.onReset(event);
        }}
      >
        <slot name="start"></slot>

        {this.getFieldConfigType()}

        <slot></slot>

        <slot name="end"></slot>
      </form>
    );
  }
}
