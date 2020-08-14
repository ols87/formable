import { Component, h, State, Prop, Event, EventEmitter } from "@stencil/core";
import { RadioProperty } from "./types";

@Component({
  tag: "vf-radio",
  styleUrl: "radio.css",
})
export class ComponentRadio {
  @State() checked: any;

  @Prop() field: RadioProperty;

  @Event() eventClick: EventEmitter<RadioProperty>;
  @Event() eventChange: EventEmitter<RadioProperty>;
  @Event() eventInvalid: EventEmitter<RadioProperty>;

  componentWillLoad() {
    this.checked = this.field.value ? true : false;
  }

  event(name: string, event: any) {
    if (name === "change") {
      this.checked = event.target.value;
      this.field.set(event.target.value);
    }

    name = this.field.on(name);

    this[`event${name}`].emit(this.field, event);
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

        <div id={view.id} class={`radio-group ${view.classes?.field ?? ""}`}>
          {view.options.map(option => (
            <div class="radio-option">
              <input
                type="radio"
                {...{ checked: value == option.value }}
                name={view.id}
                value={option.value}
                disabled={view.disabled}
                onClick={(event) => this.event("click", event)}
                onChange={(event) => this.event("change", event)}
                onInvalid={(event) => this.event("invalid", event)}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>

        <div class="vf-field-errors vf-input-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-input-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
