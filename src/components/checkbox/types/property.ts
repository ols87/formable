import { FieldProperty } from "../../../field/types";
import { CheckboxEvents, CheckboxView } from "./";

export interface CheckboxProperty extends FieldProperty {
  view: CheckboxView;
  events?: CheckboxEvents;
}
