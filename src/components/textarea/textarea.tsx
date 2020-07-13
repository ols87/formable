import {
  Component,
  ComponentInterface,
  h,
  State,
  Prop,
  Element,
} from "@stencil/core";

import { FormFieldConfigType } from "../../types";

import { ValidatorType } from "@utils/validation/types";

@Component({
  tag: "formable-textarea",
  styleUrl: "textarea.css",
  shadow: true,
})
export class ComponentTextarea implements ComponentInterface {
  @State() errorMessage: string;
  @State() lineHeight: number;
  @State() rows: number;
  @State() hiddenValue: string;
  @Element() el: HTMLElement;

  @Prop() fieldConfig: FormFieldConfigType = {
    options: {
      id: "",
      type: "text",
      required: false,
      autoExpand: true,
      rows: 2,
    },
  };

  componentWillLoad() {
    this.rows = this.fieldConfig.options.rows || 2;
    this.hiddenValue = this.fieldConfig.value;

    this.fieldConfig.formControl = {
      error: null,
      touched: false,
      valid: false,
    };

    this.fieldConfig.formControl.markTouched = () => {
      this.fieldConfig.formControl.touched = true;
      this.checkValidation();
    };

    this.fieldConfig.formControl.markUnTouched = () => {
      this.fieldConfig.formControl.touched = false;
    };

    this.fieldConfig.formControl.submit = () => {
      this.fieldConfig.formControl.touched = true;
      this.checkValidation();
    };
  }

  componentDidLoad() {
    setTimeout(() => {
      const textareaHidden = this.el.shadowRoot.lastElementChild.firstElementChild;

      if (!textareaHidden) {
        return;
      }

      this.lineHeight = textareaHidden.clientHeight / this.rows;
      this.checkAutoExpand();
    }, 0);
  }

  className(): string {
    const value = this.fieldConfig.value ? "has-value" : "is-empty";
    const error = this.errorMessage ? "has-error" : "is-valid";

    return `textarea ${value} ${error}`;
  }

  setValue(event) {
    this.fieldConfig.value = event.target.value;
    this.hiddenValue = event.target.value;

    this.checkValidation();
    this.checkAutoExpand();
    this.callEvent("onInput", event);
  }

  checkAutoExpand() {
    if (!this.fieldConfig.options.autoExpand) {
      return;
    }

    setTimeout(() => {
      const textareaHidden = this.el.shadowRoot.lastElementChild.firstElementChild;

      if (!textareaHidden) {
        return;
      }

      if (textareaHidden.scrollHeight === textareaHidden.clientHeight) {
        this.rows = this.fieldConfig.options.rows;
        return;
      }

      this.rows = Math.floor(textareaHidden.scrollHeight / this.lineHeight) + 1;
    }, 0);
  }

  callEvent(eventName: string, event) {
    if (eventName === "onBlur") {
      this.fieldConfig.formControl = {
        ...this.fieldConfig.formControl,
        touched: true,
      };

      this.checkValidation();
    }

    if (this.fieldConfig.events && this.fieldConfig.events[eventName]) {
      this.fieldConfig.events[eventName](event);
    }
  }

  checkValidation() {
    if (!this.fieldConfig.formControl?.touched) {
      return;
    }

    if (this.fieldConfig.options.required) {
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

    for (const key in this.fieldConfig.validators) {
      if (this.fieldConfig.validators.hasOwnProperty(key)) {
        const validator = this.fieldConfig.validators[key];

        this.fieldConfig.formControl.error = {
          ...this.fieldConfig.formControl.error,
          [key]: !this.checkValidateExpression(validator),
        };

        if (this.fieldConfig.formControl.error[key]) {
          this.errorMessage = this.getValidateMessage(validator);
          this.fieldConfig.formControl.valid = false;
          return;
        }

        this.fieldConfig.formControl.valid = true;
        delete this.fieldConfig.formControl.error[key];
      }
    }
  }

  checkValidateExpression(validator: ValidatorType) {
    return validator.expression(
      this.fieldConfig.value,
      this.fieldConfig.formControl
    );
  }

  getValidateMessage(validator: ValidatorType) {
    if (typeof validator.message === "string") {
      return validator.message;
    }

    return validator.message(
      this.fieldConfig.value,
      this.fieldConfig.formControl
    );
  }

  render() {
    return (
      <div class="textarea-wrapper">
        <textarea
          class={this.className() + " textarea-hidden"}
          value={this.hiddenValue}
          rows={this.fieldConfig.options.rows || 3}
        ></textarea>

        <textarea
          class={this.className()}
          id={this.fieldConfig.options.id}
          required={this.fieldConfig.options.required}
          disabled={this.fieldConfig.options.disabled}
          value={this.fieldConfig.value}
          onInput={(event) => this.setValue(event)}
          onInvalid={(event) => this.callEvent("onInvalid", event)}
          onChange={(event) => this.callEvent("onChange", event)}
          onClick={(event) => this.callEvent("onClick", event)}
          onFocus={(event) => this.callEvent("onFocus", event)}
          onBlur={(event) => this.callEvent("onBlur", event)}
          rows={this.rows}
        />

        <label class="textarea-label">{this.fieldConfig.options.label}</label>
        <div class="textarea-error">{this.errorMessage}</div>
      </div>
    );
  }
}
