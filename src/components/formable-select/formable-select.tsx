import { Component, ComponentInterface, h, State, Prop } from "@stencil/core";
import { SelectFieldConfigType } from "../../types";

@Component({
  tag: "formable-select",
  styleUrl: "formable-select.css",
  shadow: true,
})
export class FormableSelect implements ComponentInterface {
  @State() errorMessage: string;
  @State() className: string;
  @Prop() fieldConfig: SelectFieldConfigType = {
    options: {
      id: "",
      required: false,
      data: [],
    },
  };

  componentWillLoad() {
    this.fieldConfig.formControl = {
      error: null,
      touched: false,
      valid: false,
    };

    this.fieldConfig.formControl.markTouched = () => {
      this.fieldConfig.formControl.touched = true;
      this.checkValidation();
      this.setClassName();
    };

    this.fieldConfig.formControl.markUnTouched = () => {
      this.fieldConfig.formControl.touched = false;
      this.errorMessage = null;
      this.setClassName();
    };

    this.fieldConfig.formControl.submit = () => {
      this.fieldConfig.formControl.touched = true;
      this.checkValidation();
      this.setClassName();
    };

    this.fieldConfig.formControl.reset = () => {
      this.fieldConfig.formControl.error = null;
      this.fieldConfig.formControl.touched = false;
      this.fieldConfig.formControl.valid = false;
      this.fieldConfig.value = undefined;
      this.errorMessage = null;
      this.setClassName();
    };

    this.setClassName();
  }

  setClassName() {
    const value = this.fieldConfig.value ? "has-value" : "is-empty";
    const error = this.errorMessage ? "has-error" : "is-valid";

    this.className = `input ${value} ${error}`;
  }

  setValue(event) {
    this.fieldConfig.value = event.target.value;

    this.callEvent("onInput", event);
    this.checkValidation();
    this.setClassName();
  }

  callEvent(eventName: string, event) {
    if (eventName === "onBlur") {
      this.fieldConfig.formControl = {
        ...this.fieldConfig.formControl,
        touched: true,
      };

      this.checkValidation();
      this.setClassName();
    }

    if (this.fieldConfig.events && this.fieldConfig.events[eventName]) {
      this.fieldConfig.events[eventName](event);
    }
  }

  checkValidation() {
    if (!this.fieldConfig.formControl?.touched) {
      return;
    }

    if (!this.fieldConfig.options.required) {
      return;
    }

    this.fieldConfig.formControl.error = {
      ...this.fieldConfig.formControl.error,
      required: !this.fieldConfig.value,
    };

    if (!this.fieldConfig.value) {
      this.errorMessage = "This field is required";
      this.fieldConfig.formControl.valid = false;
      return;
    }

    this.errorMessage = null;
    this.fieldConfig.formControl.valid = true;
    delete this.fieldConfig.formControl.error.required;
  }

  render() {
    return (
      <div class="input-wrapper">
        <select
          class={this.className}
          id={this.fieldConfig.options.id}
          name={this.fieldConfig.options.id}
          required={this.fieldConfig.options.required}
          disabled={this.fieldConfig.options.disabled}
          onInput={(event) => this.setValue(event)}
          onInvalid={(event) => this.callEvent("onInvalid", event)}
          onChange={(event) => this.callEvent("onChange", event)}
          onClick={(event) => this.callEvent("onClick", event)}
          onFocus={(event) => this.callEvent("onFocus", event)}
          onBlur={(event) => this.callEvent("onBlur", event)}
        >
          <option selected disabled hidden label=""></option>

          {this.fieldConfig.options.data.map(item => 
            <option value={item.value} selected={this.fieldConfig.value == item.value} label={item.label}>
            </option>
          )}
        </select>

        <label class="input-label">{this.fieldConfig.options.label}</label>
        <div class="input-error">{this.errorMessage}</div>
      </div>
    );
  }
}
