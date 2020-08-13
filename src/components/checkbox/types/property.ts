import { FieldProperty } from "field/types";
import { CheckboxEvents } from "./";
import { CheckboxView } from "./view";

export interface CheckboxProperty extends FieldProperty {
  view: CheckboxView;
  events?: CheckboxEvents;
}
