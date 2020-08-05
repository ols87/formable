import { Component, h, Prop, Event, EventEmitter, State } from "@stencil/core";
import { InputProperty } from "./types";
import { setMeta, setValue } from "field/controller";
import { callEvent } from "field/events";

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

  @State() setMeta: Function = setMeta.bind(this);
  @State() setValue: Function = setValue.bind(this);
  @State() callEvent: Function = callEvent.bind(this);

  componentWillLoad() {
    this.setMeta("field");
  }

  event(name: string, event: any) {
    this.setValue("field", event.target.value);
    this.callEvent("field", name);
  }

  render() {
    const { render, value } = this.field;

    return (
      <div
        class={`input-wrapper ${
          render.classes?.wrapper ? render.classes?.wrapper : ""
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
          onClick={(event) => this.event("click", event)}
          onFocus={(event) => this.event("focus", event)}
          onInput={(event) => this.event("input", event)}
          onChange={(event) => this.event("change", event)}
          onBlur={(event) => this.event("blur", event)}
          onInvalid={(event) => this.event("invalid", event)}
        />
        <div class="input-error">{render.error}</div>
      </div>
    );
  }
}
