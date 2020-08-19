import { FieldProperty } from "./";
import { SelectView, SelectEvents } from "./";

export interface SelectProperty extends FieldProperty {
  view: SelectView;
  events?: SelectEvents;
}
