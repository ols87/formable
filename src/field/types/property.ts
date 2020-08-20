import {
  FieldView,
  FieldEvents,
  FieldMeta,
  FieldClass,
  FieldLifecycle,
} from "./";

import { Validator } from "../../validation/types";

export interface FieldProperty extends Partial<FieldClass> {
  view: FieldView;
  events?: FieldEvents;
  meta?: FieldMeta;
  validators?: Array<Validator>;
  lifecycle?: FieldLifecycle;
  value?: any;
}
