import {
  Component,
  h,
  Prop,
  Event,
  Element,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";

import { DatepickerProperty, PikadyEvents } from "./types";
@Component({
  tag: "vf-datepicker",
  styleUrl: "../../../node_modules/pikaday/css/pikaday.css",
})
export class ComponentDatepicker implements ComponentInterface {
  @Prop() field: DatepickerProperty;

  @Element() datepickerElement: HTMLElement;

  @Event() eventClick: EventEmitter<DatepickerProperty>;
  @Event() eventFocus: EventEmitter<DatepickerProperty>;
  @Event() eventChange: EventEmitter<DatepickerProperty>;
  @Event() eventInput: EventEmitter<DatepickerProperty>;
  @Event() eventBlur: EventEmitter<DatepickerProperty>;
  @Event() eventInvalid: EventEmitter<DatepickerProperty>;
  @Event() eventOpen: EventEmitter<DatepickerProperty>;
  @Event() eventClose: EventEmitter<DatepickerProperty>;
  @Event() eventDraw: EventEmitter<DatepickerProperty>;
  @Event() fieldChange: EventEmitter<DatepickerProperty>;

  load() {
    const events: PikadyEvents = {
      onSelect: () => this.event("change", this.toString()),
      onOpen: () => this.event("open", this.toString()),
      onClose: () => this.event("close", this.toString()),
      onDraw: () => this.event("draw", this.toString()),
    };

    this.field.init(this.datepickerElement, events);
  }

  toString() {
    return this.field.picker.toString();
  }

  event(name: string, event: any) {
    let value: string = this.field.value;

    if (typeof event === "string") {
      value = event || this.field.value;
    }

    if (name === "change") {
      const handle = this.field.on(name, value);

      this[`event${handle}`].emit(this.field);

      this.fieldChange.emit(this.field);
    }
  }

  render() {
    const { view, value } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-datepicker-wrapper ${
          view.classes?.wrapper ?? ""
        }  ${this.field.classes()}`}
      >
        <label
          htmlFor={view.id}
          class={`vf-field-label vf-datepicker-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div class="vf-datepicker-container">
          <input
            autoComplete="off"
            class={view.classes?.field}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
            value={...value}
            onInput={(event) => this.event("input", event)}
            onClick={(event) => this.event("click", event)}
            onFocus={(event) => this.event("focus", event)}
            onBlur={(event) => this.event("blur", event)}
            onInvalid={(event) => this.event("invalid", event)}
          />
        </div>

        <div class="vf-field-errors vf-datepicker-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-datepicker-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }

  async connectedCallback() {
    this.field.destroy();

    if (this.field?.lifecycle?.connectedCallback)
      await this.field.lifecycle.connectedCallback();
  }

  async disconnectedCallback() {
    this.field.destroy();

    if (this.field?.lifecycle?.disconnectedCallback)
      await this.field.lifecycle.disconnectedCallback();
  }

  async componentWillLoad() {
    if (this.field?.lifecycle?.componentWillLoad)
      await this.field.lifecycle.componentWillLoad();
  }

  async componentDidLoad() {
    this.load();

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
