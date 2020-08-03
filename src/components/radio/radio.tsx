import { Component, h, State, Prop } from "@stencil/core";
import { ComponentRadioInterface, RadioFieldConfigType } from "./types";
import * as radioCtl from "./utils";

@Component({
  tag: "formable-radio",
  styleUrl: "radio.css",
  shadow: true,
})
export class FormableRadio implements ComponentRadioInterface {
  @State() errorMessage: string;
  @State() className: string;
  @State() checked: boolean;
  @Prop() fieldConfig: RadioFieldConfigType = {
    options: {
      id: "",
      required: false,
    },
  };

  componentWillLoad() {
    radioCtl.componentWillLoad(this);

    this.checked = this.fieldConfig.value ? true : false;
  }

  setClassName() {
    const value = this.fieldConfig.value ? "has-value" : "is-empty";
    const error = this.errorMessage ? "has-error" : "is-valid";

    this.className = `radio ${value} ${error}`;
  }

  setValue(event) {
    this.checked = !this.checked;
    this.fieldConfig.value = this.checked;

    this.callEvent("onChange", event);
    this.checkValidation();
    this.setClassName();
  }

  callEvent(eventName: string, event) {
    radioCtl.callEvent(eventName, event, this);
  }

  checkValidation() {
    if (!this.fieldConfig.formControl?.touched) {
      return;
    }

    if (!this.fieldConfig.options.required) {
      return;
    }

    radioCtl.checkRequired(this);
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
      <div class="radio-wrapper">
        <input
          type="radio"
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
          class="radio-label"
          onClick={(event) => this.onLabelClick(event)}
        >
          {this.fieldConfig.options.label}
        </label>
        <div class="radio-error">{this.errorMessage}</div>
      </div>
    );
  }
}
