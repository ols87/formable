import { FieldProperty } from "field/types";
import { SelectEvents } from "./";
import { SelectView } from "./view";

export interface SelectProperty extends FieldProperty {
  view: SelectView;
  events?: SelectEvents;
}
