import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  Host,
} from "@stencil/core";

import { FormClass } from "./types";

import {
  InputProperty,
  SelectProperty,
  EditorProperty,
  CheckboxProperty,
  RadioProperty,
  ToggleProperty,
  TextareaProperty,
  DatepickerProperty,
} from "components/types";

@Component({
  tag: "vf-form",
})
export class FormableForm implements ComponentInterface {
  @Prop() form: FormClass;

  @Event() eventChange: EventEmitter<FormClass>;

  event(key: string) {
    this.form.fields[key] = this.form.fields[key].render();

    this.form = this.form.render();
  }

  render() {
    return (
      <Host>
        {Object.keys(this.form.fields ?? {}).map((key: string) => {
          const field = this.form.fields[key];

          return this.renderField(field.type, key);
        })}
      </Host>
    );
  }

  renderField(type: string, key: string): HTMLElement {
    const fields = {
      checkbox: (field: CheckboxProperty) => (
        <vf-checkbox
          onEventChange={() => this.event(key)}
          field={field}
        ></vf-checkbox>
      ),
      datepicker: (field: DatepickerProperty) => (
        <vf-datepicker
          onEventChange={() => this.event(key)}
          field={field}
        ></vf-datepicker>
      ),
      editor: (field: EditorProperty) => (
        <vf-editor
          onEventChange={() => this.event(key)}
          field={field}
        ></vf-editor>
      ),
      input: (field: InputProperty) => (
        <vf-input onEventInput={() => this.event(key)} field={field}></vf-input>
      ),
      radio: (field: RadioProperty) => (
        <vf-radio
          onEventChange={() => this.event(key)}
          field={field}
        ></vf-radio>
      ),
      select: (field: SelectProperty) => (
        <vf-select
          onEventChange={() => this.event(key)}
          field={field}
        ></vf-select>
      ),
      textarea: (field: TextareaProperty) => (
        <vf-textarea
          onEventInput={() => this.event(key)}
          field={field}
        ></vf-textarea>
      ),
      toggle: (field: ToggleProperty) => (
        <vf-toggle
          onEventChange={() => this.event(key)}
          field={field}
        ></vf-toggle>
      ),
    };

    return fields[type](this.form.fields[key]);
  }
}
