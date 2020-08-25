import { FieldView, FieldEvents, FieldClass, FieldLifecycle } from "./";

import { Validator } from "../../validation/types";

export type FieldComponent =
  | "checkbox"
  | "datepicker"
  | "editor"
  | "input"
  | "radio"
  | "select"
  | "textarea"
  | "toggle";

export interface FieldProperty extends Partial<FieldClass> {
  type?: FieldComponent;
  view: FieldView;
  events?: FieldEvents;
  validators?: Array<Validator>;
  lifecycle?: FieldLifecycle;
  value?: any;
  touched?: boolean;
  submitted?: boolean;
  valid?: boolean;
}
