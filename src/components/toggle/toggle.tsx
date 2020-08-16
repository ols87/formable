import { Component, h, State, Prop, Event, EventEmitter } from "@stencil/core";
import { ToggleProperty } from "./types";

@Component({
  tag: "vf-toggle",
  styleUrl: "toggle.css",
})
export class ComponentToggle {
  @State() checked: boolean;

  @Prop() field: ToggleProperty;

  @Event() eventClick: EventEmitter<ToggleProperty>;
  @Event() eventChange: EventEmitter<ToggleProperty>;
  @Event() eventInvalid: EventEmitter<ToggleProperty>;

  componentWillLoad() {
    this.checked = this.field.value ? true : false;
  }

  event(name: string, event: any) {
    if (name === "change") {
      this.checked = !this.checked;
      this.field.set(this.checked);
    }

    name = this.field.on(name);

    this[`event${name}`].emit(this.field, event);
  }

  onToggle(event: any) {
    if (this.field.view.disabled) {
      return;
    }

    this.event("click", event);
    this.event("change", event);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-input-wrapper ${
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
          class={`vf-field-label vf-input-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div class="vf-field-errors vf-input-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-input-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
