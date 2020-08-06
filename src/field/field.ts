import { InputView, InputProperty, InputEvents } from "components/input/types";

import { FieldMeta, FieldController } from "field/types";

type FormFieldView = InputView;
type FormFieldEvents = InputEvents;
type FormFieldMeta = FieldMeta;

export type FormField = InputProperty & Partial<FieldController>;

type FormFieldClass = InputProperty & FieldController;

export class Field implements FormFieldClass {
  public view: FormFieldView;

  public events: FormFieldEvents;

  public meta: FormFieldMeta;

  public validators: any;

  public controller: FieldController;

  public value: any;

  constructor(options: FormField) {
    this.view = options.view;

    this.events = options.events || {};

    this.meta = {
      touched: false,
      pristine: true,
      valid: this.view.required ? false : true,
    };

    this.controller = {
      set: this.set.bind(this),
      get: this.get.bind(this),
      touch: this.touch.bind(this),
      unTouch: this.unTouch.bind(this),
      clear: this.clear.bind(this),
      render: this.render.bind(this),
      on: this.on.bind(this),
      validate: this.validate.bind(this),
    };

    this.validators = options.validators || {};
  }

  set(value: any) {
    this.value = value;

    this.touch();

    return this.render();
  }

  get(): any {
    return this.value;
  }

  touch() {
    this.meta.touched = true;

    this.validate();
  }

  unTouch() {
    this.meta.touched = false;

    this.validate();
  }

  clear() {
    this.unTouch();

    this.set(undefined);

    this.validate();
  }

  render(): any {
    return { ...this };
  }

  on(name: string): string {
    name = name.charAt(0).toUpperCase() + name.slice(1);

    if (this.events?.hasOwnProperty(`on${name}`)) {
      this.events[`on${name}`](this);
    }

    return name;
  }

  validate(): boolean {
    return true;
  }
}
