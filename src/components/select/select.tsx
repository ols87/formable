import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";
import { SelectProperty } from "./types";
import { FieldEventOptions } from "field";
@Component({
  tag: "vf-select",
})
export class ComponentSelect implements ComponentInterface {
  @Prop() field: SelectProperty;

  @Event() eventClick: EventEmitter<SelectProperty>;
  @Event() eventChange: EventEmitter<SelectProperty>;
  @Event() eventInvalid: EventEmitter<SelectProperty>;

  event(name: string, event: any) {
    const eventOptions: FieldEventOptions = {
      name,
      value: event.target.value,
      component: this,
    };

    this.field.on(eventOptions);
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-select-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          class={`vf-field-label vf-select-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <select
          class={view.classes?.field}
          id={view.id}
          name={view.id}
          required={view.required}
          disabled={view.disabled}
          onClick={(event) => this.event("click", event)}
          onChange={(event) => this.event("change", event)}
          onInvalid={(event) => this.event("invalid", event)}
        >
          <option selected label={view.placeholder ?? "Please select"}></option>

          {view.options.map((item) => (
            <option
              value={item.value}
              selected={value == item.value}
              label={item.label}
            ></option>
          ))}
        </select>

        <div class="vf-field-errors vf-select-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-select-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
