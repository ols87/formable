import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { ToggleProperty } from "./types";
import { FieldEventOptions } from "field";

@Component({
  tag: "vf-toggle",
  styleUrl: "toggle.css",
})
export class ComponentToggle {
  @Prop() checked: boolean;

  @Prop() field: ToggleProperty;

  @Event() eventClick: EventEmitter<ToggleProperty>;
  @Event() eventChange: EventEmitter<ToggleProperty>;
  @Event() eventInvalid: EventEmitter<ToggleProperty>;

  componentWillLoad() {
    this.checked = this.field.value ? true : false;
  }

  event(name: string, value: any) {
    if (name === "change") {
      this.checked = value;
    }

    const eventOptions: FieldEventOptions = {
      name,
      value: this.checked,
      component: this,
    };

    this.field.on(eventOptions);
  }

  onToggle(event: any) {
    if (this.field.view.disabled) {
      return;
    }

    this.event("click", event.target.value);
    this.event("change", !this.checked);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-toggle-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <div class="switch toggle" onClick={(event) => this.onToggle(event)}>
          <input
            type="checkbox"
            {...{ checked: this.checked }}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
          />
          <span class="slider round"></span>
        </div>

        <label
          class={`vf-field-label vf-toggle-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div class="vf-field-errors vf-toggle-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-toggle-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
