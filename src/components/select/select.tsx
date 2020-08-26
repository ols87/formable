import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";

import { SelectProperty } from "./types";

@Component({
  tag: "vf-select",
})
export class ComponentSelect implements ComponentInterface {
  @Prop() field: SelectProperty;

  @Event() eventClick: EventEmitter<SelectProperty>;
  @Event() eventChange: EventEmitter<SelectProperty>;
  @Event() eventInvalid: EventEmitter<SelectProperty>;

  event(name: string, event: any) {
    const handle = this.field.on(name, event.target.value);

    this[`event${handle}`].emit(this.field);
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-select-wrapper ${
          view.classes?.wrapper ?? ""
        }  ${this.field.classes()}`}
      >
        <label
          class={`vf-field-label vf-select-label ${view.classes?.label ?? ""}`}
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

          {view.options.map((item) => {
            const optionValue = item[view.keys?.value] ?? item.value;
            const optionLabel = item[view.keys?.label] ?? item.label;

            return (
              <option
                value={optionValue}
                selected={value == optionValue}
                label={optionLabel}
              ></option>
            );
          })}
        </select>

        <div class="vf-field-errors vf-select-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-select-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }

  async connectedCallback() {
    if (this.field.lifecycle?.connectedCallback)
      await this.field.lifecycle.connectedCallback();
  }

  async disconnectedCallback() {
    if (this.field.lifecycle?.disconnectedCallback)
      await this.field.lifecycle.disconnectedCallback();
  }

  async componentWillLoad() {
    if (this.field.lifecycle?.componentWillLoad)
      await this.field.lifecycle.componentWillLoad();
  }

  async componentDidLoad() {
    if (this.field.lifecycle?.componentDidLoad)
      await this.field.lifecycle.componentDidLoad();
  }

  componentShouldUpdate(newVal: any, oldVal: any, propName: string) {
    if (this.field.lifecycle?.componentShouldUpdate)
      this.field.lifecycle.componentShouldUpdate(newVal, oldVal, propName);
  }

  async componentWillRender() {
    if (this.field.lifecycle?.componentWillRender)
      await this.field.lifecycle.componentWillRender();
  }

  async componentDidRender() {
    if (this.field.lifecycle?.componentDidRender)
      await this.field.lifecycle.componentDidRender();
  }

  async componentWillUpdate() {
    if (this.field.lifecycle?.componentWillUpdate)
      await this.field.lifecycle.componentWillUpdate();
  }

  async componentDidUpdate() {
    if (this.field.lifecycle?.componentDidUpdate)
      await this.field.lifecycle.componentDidUpdate();
  }
}
