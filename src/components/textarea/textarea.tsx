import {
  Component,
  h,
  State,
  Prop,
  Element,
} from "@stencil/core";

import { TextareaFieldConfigType, ComponentTextareaInterface } from "./types";

import * as textareaCtl from "./utils";

@Component({
  tag: "formable-textarea",
  styleUrl: "textarea.css",
  shadow: true,
})
export class ComponentTextarea implements ComponentTextareaInterface {
  @State() errorMessage: string;
  @State() className: string;
  @State() lineHeight: number;
  @State() rows: number;
  @State() hiddenValue: string;
  @Element() el: HTMLElement;

  @Prop() fieldConfig: TextareaFieldConfigType = {
    options: {
      id: "",
      required: false,
      autoExpand: false,
      rows: 3,
    },
  };

  componentWillLoad() {
    textareaCtl.componentWillLoad(this);
  }

  componentDidLoad() {
    textareaCtl.componentDidLoad(this);
  }

  setClassName() {
    const value = this.fieldConfig.value ? "has-value" : "is-empty";
    const error = this.errorMessage ? "has-error" : "is-valid";

    this.className = `textarea ${value} ${error}`;
  }

  setValue(event) {
    this.fieldConfig.value = event.target.value;
    this.hiddenValue = event.target.value;

    this.checkValidation();
    this.setClassName();
    this.checkAutoExpand();
    this.callEvent("onInput", event);
  }

  checkAutoExpand() {
    if (!this.fieldConfig.options.autoExpand) {
      return;
    }

    this.checkScrollHeightTextareaHidden();
  }

  checkScrollHeightTextareaHidden() {
    textareaCtl.checkScrollHeightTextareaHidden(this);
  }

  callEvent(eventName: string, event) {
    if (eventName === "onKeyDown") {
      this.checkAutoExpand();
    }

    textareaCtl.callEvent(eventName, event, this);
  }

  checkValidation() {
    textareaCtl.checkValidation(this);
  }

  render() {
    return (
      <div class="textarea-wrapper">
        <textarea
          class={this.className + " textarea-hidden"}
          value={this.hiddenValue}
          rows={this.fieldConfig.options.rows || 3}
        ></textarea>

        <textarea
          class={this.className}
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
          onKeyDown={(event) => this.callEvent("onKeyDown", event)}
          rows={this.rows}
          cols={this.fieldConfig.options.cols}
        />

        <label class="textarea-label">{this.fieldConfig.options.label}</label>
        <div class="textarea-error">{this.errorMessage}</div>
      </div>
    );
  }
}
