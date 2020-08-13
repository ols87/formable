import { FieldProperty } from "field/types";
import { InputView, InputEvents } from "./";

export interface InputProperty extends FieldProperty {
  view: InputView;
  events?: InputEvents;
}
