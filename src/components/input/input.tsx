import { Component, h, Prop, State } from "@stencil/core";

import { InputFieldConfigType, ComponentInputInterface } from "./types";

import * as inputCtl from "./utils";

@Component({
  tag: "formable-input",
  styleUrl: "input.css",
})
export class ComponentInput implements ComponentInputInterface {
  @State() errorMessage: string;
  @State() className: string;

  @Prop() fieldConfig: InputFieldConfigType = {
    options: {
      id: "",
      type: "text",
      required: false,
    },
  };

  componentWillLoad() {
    // inputCtl.componentWillLoad(this);
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
    // inputCtl.callEvent(eventName, event, this);
  }

  checkValidation() {
    // inputCtl.checkValidation(this);
  }

  render() {
    return (
      <div class="input-wrapper">
        <input
          autoComplete="on"
          class={this.className}
          id={this.fieldConfig.options.id}
          name={this.fieldConfig.options.id}
          type={this.fieldConfig.options.type}
          required={this.fieldConfig.options.required}
          disabled={this.fieldConfig.options.disabled}
          value={this.fieldConfig.value}
          onInput={(event) => this.setValue(event)}
          onInvalid={(event) => this.callEvent("onInvalid", event)}
          onChange={(event) => this.callEvent("onChange", event)}
          onClick={(event) => this.callEvent("onClick", event)}
          onFocus={(event) => this.callEvent("onFocus", event)}
          onBlur={(event) => this.callEvent("onBlur", event)}
        />
        <label class="input-label">{this.fieldConfig.options.label}</label>
        <div class="input-error">{this.errorMessage}</div>
      </div>
    );
  }
}
