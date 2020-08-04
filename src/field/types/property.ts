import { FieldEvents } from "./events";
import { FieldRender } from "./render";

export interface FieldProperty {
  render: FieldRender;
  events?: FieldEvents;
  controller?: any;
  value?: any;
}
