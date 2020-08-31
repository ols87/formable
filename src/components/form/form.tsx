import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Event,
  EventEmitter,
  Host,
  Listen,
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

  @Event() formChange: EventEmitter<FormClass>;

  @Listen("fieldChange")
  update(event: CustomEvent) {
    const key = event.detail.view.id;

    this.form.fields[key] = this.form.fields[key].render();

    this.form = this.form.render();

    this.formChange.emit(this.form);
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
        <vf-checkbox field={field}></vf-checkbox>
      ),
      datepicker: (field: DatepickerProperty) => (
        <vf-datepicker field={field}></vf-datepicker>
      ),
      editor: (field: EditorProperty) => <vf-editor field={field}></vf-editor>,
      input: (field: InputProperty) => <vf-input field={field}></vf-input>,
      radio: (field: RadioProperty) => <vf-radio field={field}></vf-radio>,
      select: (field: SelectProperty) => <vf-select field={field}></vf-select>,
      textarea: (field: TextareaProperty) => (
        <vf-textarea field={field}></vf-textarea>
      ),
      toggle: (field: ToggleProperty) => <vf-toggle field={field}></vf-toggle>,
    };

    return fields[type](this.form.fields[key]);
  }
}
