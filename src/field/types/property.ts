import { FieldView, FieldEvents } from ".";
import { FieldMeta } from "./meta";
import { Validator } from "./validation";
import { FieldClass } from "./class";

export interface FieldProperty extends Partial<FieldClass> {
  view: FieldView;
  events?: FieldEvents;
  meta?: FieldMeta;
  validators?: Array<string | Validator>;
  value?: any;
}
