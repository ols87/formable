import { FieldProperty } from "../../../field/types";
import { RadioEvents } from "./";
import { RadioView } from "./view";

export interface RadioProperty extends FieldProperty {
  view: RadioView;
  events?: RadioEvents;
}
