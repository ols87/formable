import { Component, h, State, Prop, Event, EventEmitter } from "@stencil/core";
import { CheckboxProperty } from "./types";

@Component({
  tag: "vf-checkbox",
})
export class ComponentCheckbox {
  @State() checked: boolean;

  @Prop() field: CheckboxProperty;

  @Event() eventClick: EventEmitter<CheckboxProperty>;
  @Event() eventChange: EventEmitter<CheckboxProperty>;
  @Event() eventInvalid: EventEmitter<CheckboxProperty>;

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

  onLabelClick(event: any) {
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

        <input
          type="checkbox"
          {...{ checked: this.checked }}
          class={view.classes?.field}
          id={view.id}
          name={view.id}
          required={view.required}
          disabled={view.disabled}
          onClick={(event) => this.event("click", event)}
          onChange={(event) => this.event("change", event)}
          onInvalid={(event) => this.event("invalid", event)}
        />

        <label
          class={`vf-field-label vf-input-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
          onClick={(event) => this.onLabelClick(event)}
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
