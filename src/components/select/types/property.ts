import { FieldProperty } from "../../../field";
import { SelectView, SelectEvents } from "./";

export interface SelectProperty extends FieldProperty {
  view: SelectView;
  events?: SelectEvents;
}
