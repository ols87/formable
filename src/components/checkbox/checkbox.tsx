import { Component, h, State, Prop } from "@stencil/core";
import { ComponentCheckboxInterface, CheckboxFieldConfigType } from "./types";
import { CheckboxCtrl } from "./";

@Component({
  tag: "formable-checkbox",
  styleUrl: "checkbox.css",
  shadow: true,
})
export class FormableCheckbox implements ComponentCheckboxInterface {
  @Prop() fieldConfig: CheckboxFieldConfigType = {
    options: {
      id: "",
      required: false,
    },
  };

  @State() controller: any = CheckboxCtrl.bind(this)();

  @State() errorMessage: string;

  @State() className: string;

  @State() checked: boolean;

  componentWillLoad() {
    this.controller.componentWillLoad();

    this.checked = this.fieldConfig.value ? true : false;
  }

  setClassName() {
    const value = this.fieldConfig.value ? "has-value" : "is-empty";

    const error = this.errorMessage ? "has-error" : "is-valid";

    this.className = `checkbox ${value} ${error}`;
  }

  setValue(event) {
    this.checked = !this.checked;

    this.fieldConfig.value = this.checked;

    this.callEvent("onChange", event);

    this.checkValidation();

    this.setClassName();
  }

  callEvent(eventName: string, event: MouseEvent) {
    this.controller.callEvent(eventName, event);
  }

  checkValidation() {
    if (!this.fieldConfig.formControl?.touched) {
      return;
    }

    if (!this.fieldConfig.options.required) {
      return;
    }

    this.controller.checkRequired();
  }

  onLabelClick(event: any) {
    if (this.fieldConfig.options.disabled) {
      return;
    }

    this.callEvent("onClick", event);

    this.setValue(event);
  }

  render() {
    return (
      <div class="checkbox-wrapper">
        <input
          type="checkbox"
          {...{ checked: this.checked }}
          id={this.fieldConfig.options.id}
          class={this.className}
          name={this.fieldConfig.options.id}
          required={this.fieldConfig.options.required}
          disabled={this.fieldConfig.options.disabled}
          onChange={(event) => this.setValue(event)}
          onClick={(event) => this.callEvent("onClick", event)}
        />

        <label
          class="checkbox-label"
          onClick={(event) => this.onLabelClick(event)}
        >
          {this.fieldConfig.options.label}
        </label>
        <div class="checkbox-error">{this.errorMessage}</div>
      </div>
    );
  }
}
