import { Component, h, State, Prop } from "@stencil/core";
import { ComponentSelectInterface, SelectFieldConfigType } from "./types";
import * as selectCtl from './utils';

@Component({
  tag: "formable-select",
  styleUrl: "select.css",
  shadow: true,
})
export class FormableSelect implements ComponentSelectInterface {
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
    selectCtl.componentWillLoad(this);
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
    selectCtl.callEvent(eventName, event, this);
  }

  checkValidation() {
    if (!this.fieldConfig.formControl?.touched) {
      return;
    }

    if (!this.fieldConfig.options.required) {
      return;
    }

    selectCtl.checkRequired(this);
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
          <option selected hidden label=""></option>

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
