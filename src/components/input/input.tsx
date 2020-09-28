import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";

import { InputProperty } from "./types";
@Component({
  tag: "vf-input",
})
export class ComponentInput implements ComponentInterface {
  @Prop() field: InputProperty;

  @Event() eventClick: EventEmitter<InputProperty>;
  @Event() eventFocus: EventEmitter<InputProperty>;
  @Event() eventInput: EventEmitter<InputProperty>;
  @Event() eventChange: EventEmitter<InputProperty>;
  @Event() eventBlur: EventEmitter<InputProperty>;
  @Event() eventInvalid: EventEmitter<InputProperty>;
  @Event() fieldChange: EventEmitter<InputProperty>;

  event(name: string, event: any) {
    const handle = this.field.on(name, event.target.value);

    this[`event${handle}`].emit(this.field);

    this.fieldChange.emit(this.field);
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-input-wrapper ${
          view.classes?.wrapper ?? ""
        }  ${this.field.classes()}`}
      >
        <label
          class={`vf-field-label vf-input-label ${view.classes?.label ?? ""}`}
          htmlFor={view.id}
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

  async connectedCallback() {
    if (this.field?.lifecycle?.connectedCallback)
      await this.field.lifecycle.connectedCallback();
  }

  async disconnectedCallback() {
    if (this.field?.lifecycle?.disconnectedCallback)
      await this.field.lifecycle.disconnectedCallback();
  }

  async componentWillLoad() {
    if (this.field?.lifecycle?.componentWillLoad)
      await this.field.lifecycle.componentWillLoad();
  }

  async componentDidLoad() {
    if (this.field?.lifecycle?.componentDidLoad)
      await this.field.lifecycle.componentDidLoad();
  }

  componentShouldUpdate(newVal: any, oldVal: any, propName: string) {
    if (this.field?.lifecycle?.componentShouldUpdate)
      this.field.lifecycle.componentShouldUpdate(newVal, oldVal, propName);
  }

  async componentWillRender() {
    if (this.field?.lifecycle?.componentWillRender)
      await this.field.lifecycle.componentWillRender();
  }

  async componentDidRender() {
    if (this.field?.lifecycle?.componentDidRender)
      await this.field.lifecycle.componentDidRender();
  }

  async componentWillUpdate() {
    if (this.field?.lifecycle?.componentWillUpdate)
      await this.field.lifecycle.componentWillUpdate();
  }

  async componentDidUpdate() {
    if (this.field?.lifecycle?.componentDidUpdate)
      await this.field.lifecycle.componentDidUpdate();
  }
}
