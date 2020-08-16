import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { ToggleProperty } from "./";

@Component({
  tag: "vf-toggle",
  styleUrl: "toggle.css",
})
export class ComponentToggle {
  @Prop() field: ToggleProperty;

  @Event() eventChange: EventEmitter<ToggleProperty>;

  toggle() {
    if (this.field.view.disabled) return;

    this.field = this.field.set(!this.field.value);

    this.field.on("change", !this.field.value);

    this.eventChange.emit(this.field);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-toggle-wrapper ${
          view.classes?.wrapper ?? ""
        }`}
      >
        <label
          class={`switch ${this.field.value ? "checked" : ""}`}
          onClick={() => this.toggle()}
        >
          <input
            type="checkbox"
            {...{ checked: this.field.value }}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
          />{" "}
          <div></div>
        </label>

        <label
          class={`vf-field-label vf-toggle-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
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
