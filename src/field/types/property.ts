import {
  FieldView,
  FieldEvents,
  FieldMeta,
  FieldClass,
  FieldLifecycle,
} from ".";

import { Validator } from "../../validation";

export declare interface FieldProperty extends Partial<FieldClass> {
  view: FieldView;
  events?: FieldEvents;
  meta?: FieldMeta;
  validators?: Array<Validator>;
  lifecycle?: FieldLifecycle;
  value?: any;
}
