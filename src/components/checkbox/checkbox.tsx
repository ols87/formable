import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { CheckboxProperty } from "./types";
import { FieldEventOptions } from "field";

@Component({
  tag: "vf-checkbox",
})
export class ComponentCheckbox {
  @Prop() field: CheckboxProperty;

  @Event() eventClick: EventEmitter<CheckboxProperty>;
  @Event() eventChange: EventEmitter<CheckboxProperty>;
  @Event() eventInvalid: EventEmitter<CheckboxProperty>;

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

  event(name: string, event: any) {
    const eventOptions: FieldEventOptions = {
      name,
      value: event.target.checked,
      component: this,
    };

    this.field.on(eventOptions);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-checkbox-wrapper ${
          view.classes?.wrapper ? view.classes?.wrapper : ""
        }`}
      >
        <label
          htmlFor={view.id}
          class={`vf-field-label vf-checkbox-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          <input
            type="checkbox"
            {...{ checked: this.field.value }}
            class={view.classes?.field}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
            onClick={(event) => this.event("click", event)}
            onChange={(event) => this.event("change", event)}
            onInvalid={(event) => this.event("invalid", event)}
          />

          {view.label}
        </label>

        <div class="vf-field-errors vf-checkbox-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-checkbox-error">{error}</div>
          ))}
        </div>
      </div>
    );
  }
}
