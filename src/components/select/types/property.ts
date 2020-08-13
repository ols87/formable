import { FieldProperty } from "field/types";
import { SelectView, SelectEvents } from "./";

export interface SelectProperty extends FieldProperty {
  view: SelectView;
  events?: SelectEvents;
}
