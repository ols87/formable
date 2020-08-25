import {
  FieldView,
  FieldEvents,
  FieldClass,
  FieldProperty,
  FieldLifecycle,
  FieldComponent,
} from "./types";

import { Validation } from "../validation";

import { Validator } from "../validation/types";

export class Field implements FieldClass {
  public type: FieldComponent;

  public view: FieldView;

  public events: FieldEvents;

  public lifecycle: FieldLifecycle;

  public validators: Array<Validator>;

  public value: any;

  public touched: boolean;

  public submitted: boolean;

  public valid: boolean;

  constructor(options: FieldProperty) {
    this.type = options.type;

    this.view = options.view;

    this.events = options.events || {};

    this.touched = options.touched || false;

    this.submitted = options.submitted || false;

    this.valid = this.view.required ? options.valid || false : true;

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
    this.touched = true;

    this.validate();
  }

  unTouch() {
    this.touched = false;

    this.validate();
  }

  clear() {
    this.submitted = false;

    this.unTouch();

    this.set(undefined);

    this.validate();

    return this.render();
  }

  submit() {
    this.submitted = true;

    this.touch();

    this.validate();

    return this.render();
  }

  classes(): string {
    const touched = this.touched ? "touched" : "untouched";

    const submitted = this.submitted ? "submitted" : "unsubmitted";

    const error = this.view.errors?.length > 0 ? "error" : "valid";

    return `${touched} ${submitted} ${error}`;
  }

  render(): Field {
    return new Field(this);
  }

  on(name: string, value: any): string {
    name = name.charAt(0).toUpperCase() + name.slice(1);

    this.set(value);

    if (this.events?.hasOwnProperty(`on${name}`))
      this.events[`on${name}`](this);

    return name;
  }

  validate(): boolean {
    const validation = new Validation(this);

    return validation.check();
  }
}
