import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { CheckboxProperty } from "./types";
import { FieldEventOptions } from "field";

@Component({
  tag: "vf-checkbox",
})
export class ComponentCheckbox {
  @Prop() field: CheckboxProperty;

  @Event() eventClick: EventEmitter<CheckboxProperty>;
  @Event() eventChange: EventEmitter<CheckboxProperty>;
  @Event() eventInvalid: EventEmitter<CheckboxProperty>;

  componentWillLoad() {}

  event(name: string, event: any) {
    const eventOptions: FieldEventOptions = {
      name,
      value: event.target.checked,
      component: this,
    };

    this.field.on(eventOptions);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-checkbox-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          htmlFor={view.id}
          class={`vf-field-label vf-checkbox-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          <input
            type="checkbox"
            {...{ checked: this.field.value }}
            class={view.classes?.field}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
            onClick={(event) => this.event("click", event)}
            onChange={(event) => this.event("change", event)}
            onInvalid={(event) => this.event("invalid", event)}
          />

          {view.label}
        </label>

        <div class="vf-field-errors vf-checkbox-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-checkbox-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
