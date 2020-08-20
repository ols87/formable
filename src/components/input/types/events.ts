import { FieldEvents } from "../../../field/types";

export interface InputEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}
