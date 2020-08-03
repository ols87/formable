import { Component, h, State, Prop } from '@stencil/core';
import { ComponentToggleInterface, ToggleFieldConfigType } from './types';
import * as toggleCtl from "./utils";

@Component({
  tag: 'formable-toggle',
  styleUrl: 'toggle.css',
  shadow: true,
})
export class FormableToggle implements ComponentToggleInterface {
  @State() errorMessage: string;
  @State() className: string;
  @State() checked: boolean;
  @Prop() fieldConfig: ToggleFieldConfigType = {
    options: {
      id: "",
      required: false,
    },
  };

  componentWillLoad() {
    toggleCtl.componentWillLoad(this);

    this.checked = this.fieldConfig.value ? true : false;
  }

  setClassName() {
    const value = this.fieldConfig.value ? "has-value" : "is-empty";
    const error = this.errorMessage ? "has-error" : "is-valid";

    this.className = `${value} ${error}`;
  }

  setValue(event) {
    this.checked = !this.checked;
    this.fieldConfig.value = this.checked;

    this.callEvent("onChange", event);
    this.checkValidation();
    this.setClassName();
  }

  callEvent(eventName: string, event) {
    toggleCtl.callEvent(eventName, event, this);
  }

  checkValidation() {
    if (!this.fieldConfig.formControl?.touched) {
      return;
    }

    if (!this.fieldConfig.options.required) {
      return;
    }

    toggleCtl.checkRequired(this);
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
      <div class="toggle-wrapper">
        <div class="switch toggle" onClick={(event) => this.onLabelClick(event)}>
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
          <span class="slider round"></span>
        </div>

        <label
          class="toggle-label"
          onClick={(event) => this.onLabelClick(event)}
        >
          {this.fieldConfig.options.label}
        </label>
        <div class="toggle-error">{this.errorMessage}</div>
      </div>
    );
  }
}
