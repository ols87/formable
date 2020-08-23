import { FieldView, FieldEvents, FieldClass, FieldLifecycle } from "./";

import { Validator } from "../../validation/types";

export interface FieldProperty extends Partial<FieldClass> {
  view: FieldView;
  events?: FieldEvents;
  validators?: Array<Validator>;
  lifecycle?: FieldLifecycle;
  value?: any;
  touched?: boolean;
  submitted?: boolean;
  valid?: boolean;
}
