import { FieldEvents } from "../../../field";

export interface InputEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}
