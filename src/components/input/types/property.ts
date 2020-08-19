import { FieldProperty } from "../../../field";
import { InputView, InputEvents } from "./";

export declare interface InputProperty extends FieldProperty {
  view: InputView;
  events?: InputEvents;
}
