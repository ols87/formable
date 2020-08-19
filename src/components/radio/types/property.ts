import { FieldProperty } from "../../../field";
import { RadioEvents } from "./";
import { RadioView } from "./view";

export declare interface RadioProperty extends FieldProperty {
  view: RadioView;
  events?: RadioEvents;
}
