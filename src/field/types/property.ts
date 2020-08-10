import { FieldView, FieldEvents } from ".";
import { FieldMeta } from "./meta";
import { FieldController } from "./controller";
import { Validator } from "./validation";

export interface FieldProperty {
  view: FieldView;
  events?: FieldEvents;
  meta?: FieldMeta;
  validators?: Array<string | Validator>;
  value?: any;
  controller?: FieldController;
}
