import {
  FieldView,
  FieldController,
  FieldMeta,
  FieldEvents,
  FieldClass,
  FieldProperty,
} from "./types";

import { Validation } from "validation";

export class Field implements FieldClass {
  public view: FieldView;

  public events: FieldEvents;

  public meta: FieldMeta;

  public validators: any;

  public controller: FieldController;

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

    this.validators = options.validators || {};

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
    const validation = new Validation(this);
    return validation.check();
  }
}
