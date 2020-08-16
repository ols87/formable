import { FieldProperty } from "field/types";
import { ToggleEvents } from "./";
import { ToggleView } from "./view";

export interface ToggleProperty extends FieldProperty {
  view: ToggleView;
  events?: ToggleEvents;
}
