import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  ComponentInterface,
} from "@stencil/core";

import { ToggleProperty } from "./types";

@Component({
  tag: "vf-toggle",
  styleUrl: "toggle.css",
})
export class ComponentToggle implements ComponentInterface {
  @Prop() field: ToggleProperty;

  @Event() eventChange: EventEmitter<ToggleProperty>;

  toggle() {
    if (this.field.view.disabled) return;

    this.field = this.field.set(!this.field.value);

    this.field.on("change", !this.field.value);

    this.eventChange.emit(this.field);
  }

  render() {
    const { view } = this.field;

    return (
      <div
        class={`vf-field-wrapper vf-toggle-wrapper ${
          view.classes?.wrapper ?? ""
        }`}
      >
        <label
          class={`switch ${this.field.value ? "checked" : ""}`}
          onClick={() => this.toggle()}
        >
          <input
            type="checkbox"
            {...{ checked: this.field.value }}
            id={view.id}
            name={view.id}
            required={view.required}
            disabled={view.disabled}
          />{" "}
          <div></div>
        </label>

        <label
          class={`vf-field-label vf-toggle-label ${
            view.classes?.label ? view.classes?.label : ""
          }`}
        >
          {view.label}
        </label>

        <div class="vf-field-errors vf-toggle-errors">
          {view.errors?.map((error: string) => (
            <div class="vf-field-error vf-toggle-error">{error}</div>
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
