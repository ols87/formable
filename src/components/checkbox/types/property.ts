import { FieldProperty } from "../../../field";
import { CheckboxEvents, CheckboxView } from "./";

export interface CheckboxProperty extends FieldProperty {
  view: CheckboxView;
  events?: CheckboxEvents;
}
