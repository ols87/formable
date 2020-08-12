import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { InputProperty } from "./types";
@Component({
  tag: "vf-input",
})
export class ComponentInput {
  @Prop() field: InputProperty;

  @Event() eventClick: EventEmitter<InputProperty>;
  @Event() eventFocus: EventEmitter<InputProperty>;
  @Event() eventInput: EventEmitter<InputProperty>;
  @Event() eventChange: EventEmitter<InputProperty>;
  @Event() eventBlur: EventEmitter<InputProperty>;
  @Event() eventInvalid: EventEmitter<InputProperty>;

  event(name: string, event: any) {
    this.field = this.field.set(event.target.value);

    name = this.field.on(name);

    this[`event${name}`].emit(this.field);
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-input-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          class={`vf-field-label vf-input-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <input
          autoComplete="on"
          class={view.classes?.field}
          id={view.id}
          name={view.id}
          type={view.type}
          required={view.required}
          disabled={view.disabled}
          value={value}
          onClick={(event) => this.event("click", event)}
          onFocus={(event) => this.event("focus", event)}
          onInput={(event) => this.event("input", event)}
          onChange={(event) => this.event("change", event)}
          onBlur={(event) => this.event("blur", event)}
          onInvalid={(event) => this.event("invalid", event)}
        />

        <div class="vf-field-errors vf-input-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-input-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
