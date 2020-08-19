import { FieldProperty } from "../../../field";
import { InputView, InputEvents } from "./";

export interface InputProperty extends FieldProperty {
  view: InputView;
  events?: InputEvents;
}
