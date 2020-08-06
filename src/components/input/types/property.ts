import { FieldProperty } from "field/types";
import { InputEvents } from "./";
import { InputView } from "./view";

export interface InputProperty extends FieldProperty {
  view: InputView;
  events?: InputEvents;
}
