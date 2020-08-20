import { FieldEvents } from "../../../field/types";

export interface TextareaEvents extends FieldEvents {
  onFocus?: Function;
  onInput?: Function;
  onBlur?: Function;
  onInvalid?: Function;
}
