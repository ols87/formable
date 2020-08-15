import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { RadioProperty } from "./types";
import { FieldEventOptions } from "field";

@Component({
  tag: "vf-radio",
})
export class ComponentRadio {
  @Prop() field: RadioProperty;

  @Event() eventClick: EventEmitter<RadioProperty>;
  @Event() eventChange: EventEmitter<RadioProperty>;
  @Event() eventInvalid: EventEmitter<RadioProperty>;

  event(name: string, value: string) {
    const eventOptions: FieldEventOptions = {
      name,
      value,
      component: this,
    };

    this.field.on(eventOptions);
  }

  labelClick(value: string) {
    this.field.set(value);

    this.event("change", value);
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-radio-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          class={`vf-field-label vf-radio-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div id={view.id} class={`vf-radio-group ${view.classes?.field ?? ""}`}>
          {view.options.map((option) => (
            <label
              htmlFor={option.value}
              onClick={() => this.labelClick(option.value)}
            >
              <input
                type="radio"
                {...{ checked: value == option.value }}
                name={option.value}
                value={option.value}
                disabled={view.disabled}
                onClick={(event: any) =>
                  this.event("click", event.target.value)
                }
                onChange={(event: any) =>
                  this.event("change", event.target.value)
                }
                onInvalid={(event: any) =>
                  this.event("invalid", event.target.value)
                }
              />
              {option.label}
            </label>
          ))}
        </div>

        <div class="vf-field-errors vf-radio-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-radio-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
