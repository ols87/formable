import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";

import { RadioProperty } from "./types";

@Component({
  tag: "vf-radio",
})
export class ComponentRadio implements ComponentInterface {
  @Prop() field: RadioProperty;

  @Event() eventClick: EventEmitter<RadioProperty>;
  @Event() eventChange: EventEmitter<RadioProperty>;
  @Event() eventInvalid: EventEmitter<RadioProperty>;

  event(name: string, value: string) {
    const handle = this.field.on(name, value);

    this[`event${handle}`].emit(this.field);
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
          view.classes?.wrapper ?? ""
        }  ${this.field.classes()}`}
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
                name={view.id}
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
