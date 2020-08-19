import { FieldProperty } from "./";
import { RadioEvents } from "./";
import { RadioView } from "./view";

export interface RadioProperty extends FieldProperty {
  view: RadioView;
  events?: RadioEvents;
}
