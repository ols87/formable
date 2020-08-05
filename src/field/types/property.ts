import { FieldRender, FieldEvents } from "./";

export interface FieldProperty {
  render: FieldRender;
  events?: FieldEvents;
  meta?: any;
  value?: any;
}
