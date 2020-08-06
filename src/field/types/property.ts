import { FieldView, FieldEvents } from ".";
import { FieldMeta } from "./meta";
import { FieldController } from "./controller";

export interface FieldProperty {
  view: FieldView;
  events?: FieldEvents;
  meta?: FieldMeta;
  validators?: any;
  value?: any;
  controller?: FieldController;
}
