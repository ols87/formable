import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { InputProperty } from "./types/input-property";

@Component({
  tag: "vf-input",
})
export class ComponentInput {
  @Prop() field: InputProperty;

  @Event() eventInput: EventEmitter<InputProperty>;
  @Event() eventInvalid: EventEmitter<InputProperty>;
  @Event() eventChange: EventEmitter<InputProperty>;
  @Event() eventClick: EventEmitter<InputProperty>;
  @Event() eventFocus: EventEmitter<InputProperty>;
  @Event() eventBlur: EventEmitter<InputProperty>;

  callEvent(name: string, event: any) {
    name = name.charAt(0).toUpperCase() + name.slice(1);

    this.setValue(event.target.value);

    if (this.field.events?.hasOwnProperty(`on${name}`)) {
      this.field.events[`on${name}`](this.field);
    }

    this[`event${name}`].emit(this.field);
  }

  setValue(value: any) {
    this.field.value = value;
    this.field = { ...this.field };
  }

  render() {
    const { render, value } = this.field;

    return (
      <div
        class={`input-wrapper ${
          render.classes?.label ? render.classes?.label : ""
        }`}
      >
        <label
          class={`input-label ${
            render.classes?.label ? render.classes?.label : ""
          }`}
        >
          {render.label}
        </label>

        <input
          autoComplete="on"
          class={render.classes?.field}
          id={render.id}
          name={render.id}
          type={render.type}
          required={render.required}
          disabled={render.disabled}
          value={value}
          onInput={(event) => this.callEvent("input", event)}
          onInvalid={(event) => this.callEvent("invalid", event)}
          onChange={(event) => this.callEvent("change", event)}
          onClick={(event) => this.callEvent("click", event)}
          onFocus={(event) => this.callEvent("focus", event)}
          onBlur={(event) => this.callEvent("blur", event)}
        />
        {/* <div class="input-error">{this.errorMessage}</div> */}
      </div>
    );
  }
}
