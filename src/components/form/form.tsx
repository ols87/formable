import {
  Component,
  ComponentInterface,
  h,
  Prop,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";

import { FormProperty } from "./types";

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
  @Prop() fields: FormProperty = {};

  @Element() el: HTMLElement;

  @Event() eventChange: EventEmitter<FormProperty>;
  @Event() eventSubmit: EventEmitter<Partial<boolean>>;
  @Event() eventReset: EventEmitter;
  reset(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key] = this.fields[key].clear();
      }
    }

    this.fields = { ...this.fields };

    this.eventReset.emit();
  }

  submit(event: CustomEvent) {
    event.stopPropagation();
    event.preventDefault();

    let valid = true;

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key] = this.fields[key].submit();

        if (!this.fields[key].valid) valid = false;
      }
    }

    this.fields = { ...this.fields };

    this.eventSubmit.emit(valid);
  }

  event(key: string) {
    this.fields[key] = this.fields[key].render();

    this.fields = { ...this.fields };

    this.eventChange.emit(this.fields);
  }

  render() {
    return (
      <form
        noValidate
        onSubmit={(event: CustomEvent) => this.submit(event)}
        onReset={(event: CustomEvent) => this.reset(event)}
      >
        {Object.keys(this.fields ?? {}).map((key: string) => {
          const field = this.fields[key];

          return this.renderField(field.type, key);
        })}

        <slot></slot>
      </form>
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

    return fields[type](this.fields[key]);
  }
}
