import { FieldProperty } from "../../../field";
import { ToggleEvents } from "./";
import { ToggleView } from "./view";

export interface ToggleProperty extends FieldProperty {
  view: ToggleView;
  events?: ToggleEvents;
}
