import {
  FieldView,
  FieldMeta,
  FieldEvents,
  FieldClass,
  FieldProperty,
  FieldEventOptions,
  FieldLifecycle,
} from "./types";

import { Validation, Validator } from "validation";

export class Field implements FieldClass {
  public view: FieldView;

  public events: FieldEvents;

  public meta: FieldMeta;

  public lifecycle: FieldLifecycle;

  public validators: Array<Validator>;

  public value: any;

  constructor(options: FieldProperty) {
    this.view = options.view;

    this.events = options.events || {};

    this.meta = options.meta || {
      touched: false,
      pristine: true,
      submitted: false,
      valid: this.view.required ? false : true,
    };

    this.validators = options.validators || null;

    this.lifecycle = options.lifecycle;

    this.value = options.value;
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

  render(): Field {
    return new Field(this);
  }

  on(options: FieldEventOptions) {
    const { value, component } = options;

    const name = options.name.charAt(0).toUpperCase() + options.name.slice(1);

    this.set(value);

    if (this.events?.hasOwnProperty(`on${name}`))
      this.events[`on${name}`](this);

    component[`event${name}`].emit(this);
  }

  validate(): boolean {
    const validation = new Validation(this);
    return validation.check();
  }
}
