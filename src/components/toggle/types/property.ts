import { FieldProperty } from "../../../field";
import { ToggleEvents } from "./";
import { ToggleView } from "./view";

export declare interface ToggleProperty extends FieldProperty {
  view: ToggleView;
  events?: ToggleEvents;
}
