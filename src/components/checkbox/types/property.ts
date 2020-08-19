import { FieldProperty } from "../../../field";
import { CheckboxEvents, CheckboxView } from ".";

export declare interface CheckboxProperty extends FieldProperty {
  view: CheckboxView;
  events?: CheckboxEvents;
}
