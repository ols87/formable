import { FieldView, FieldEvents, FieldMeta, FieldClass } from ".";
import { Validator } from "validation";

export interface FieldProperty extends Partial<FieldClass> {
  view: FieldView;
  events?: FieldEvents;
  meta?: FieldMeta;
  validators?: Array<string | Validator>;
  value?: any;
}
